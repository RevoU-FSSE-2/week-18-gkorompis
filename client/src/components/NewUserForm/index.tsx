import { CustomizedForm, SnackBarMui } from "..";
import * as Yup from 'yup'
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { cacheAction,  usersAction } from '../../actions';
import { AnyAction } from '@reduxjs/toolkit';


import "./index.css"
import { useState } from "react";

interface ModalFormInitialValues {
    name: string,
    email:string,
    username: string,
    role: string,
    password: string
}

interface ModalFormProps {
    cb?:any;
    isCancelButton: boolean;
}

const ModalForm = ({cb, isCancelButton}:ModalFormProps) =>{

    const [openSnackBar,setOpenSnackBar] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const baseUrl = "https://edpkdmygqf.execute-api.ap-southeast-3.amazonaws.com/dev" || "http://localhost:5002"

    const dispatch = useDispatch();
    
    const userFormFields = [
        {name: "name", label: "name", type: "text"},
        {name: "email", label: "email", type: "email"},
        {name: "username", label: "username", type: "text"},
        {name: "password", label: "password", type: "password"},
        {name: "role", label: "role", type: "text"},
    ]

    const userFormInitialValues = {
        name: "",
        email: "",
        username: "",
        role: "member",
        password: ""
    }

    const onSubmitFormik = async (values:any) => {
        try { 
            const response = await axios.post(`${baseUrl}/users`, values);  
            const reduxState = undefined
            dispatch(usersAction(undefined) as unknown as AnyAction)
            dispatch(cacheAction(undefined) as unknown as AnyAction) 
            cb()
        } catch (error:any) { 
            const {message} = error;
            setErrorMessage(message);
            setOpenSnackBar(!openSnackBar)
        }
    }

    const validationSchema = {
        name: Yup.string().required("Name is required"),
        email: Yup.string().required("Email is required").email("require valid email"),
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required")
        .min(8, 'Password must be at least 8 characters long')
        .matches(/^(?=.*[a-zA-Z])(?=.*\d)/, 'Password must be alphanumeric'),
        role: Yup.string().required("Role is required"),
    }

    const customFormStyles = {
        label: {
            color: "#F1F0E8",
            // margin: "0px"
        }, 
        button: {
            backgroundColor: "#C7BCA1",
            fontSize: "15px",
            border: "0px",
            cursor: "pointer",
            borderWidth: "0px",
            color: "#65647C",
            height: "37px",
            width: "70px",
            borderRadius: "5px"
        }
    }

   

    return ( 
        <>
            <div className="app-modal-form div-center-xy-column bg-blur">
                <h3 className="app-modal-form-h3">jobprints</h3>
                <CustomizedForm<ModalFormInitialValues> 
                    fields={userFormFields} 
                    initialValues={userFormInitialValues} 
                    onSubmitFormik={onSubmitFormik} 
                    validationSchema={validationSchema}
                    customFormStyles={customFormStyles}
                    formName={"new user"}    
                    cb={cb}
                    isCancelButton={true}   
                />
            </div>
            <div>
                <SnackBarMui openSnackBar={openSnackBar} setOpenSnackBar={setOpenSnackBar} message={errorMessage}/>
            </div>
            
        </>   
    )
};

export default ModalForm;