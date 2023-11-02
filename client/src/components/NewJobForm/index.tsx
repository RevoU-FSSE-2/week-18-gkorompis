import { CustomizedForm, SnackBarMui } from "..";
import * as Yup from 'yup'
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { cacheAction, jobsAction, navigationAction } from '../../actions';
import { AnyAction } from '@reduxjs/toolkit';


import "./index.css"
import { useState } from "react";

interface ModalFormInitialValues {
    createdBy: string,
    stakeholder: string,
    job: string,
    externalId: string
}
interface ModalFormProps {
    cb?:any;
    isCancelButton: boolean;
    sessionProfile?: any;
}

const ModalForm = ({cb, isCancelButton, sessionProfile}:ModalFormProps) =>{

    const {username} = sessionProfile

    const [openSnackBar,setOpenSnackBar] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const baseUrl = "https://edpkdmygqf.execute-api.ap-southeast-3.amazonaws.com/dev" || "http://localhost:5002"

    const dispatch = useDispatch();
    
    const loginFormFields = [
        {name: "createdBy", label: "createdBy", type: "text"},
        {name: "stakeholder", label: "stakeholder", type: "text"},
        {name: "job", label: "job", type: "text"},
        {name: "externalId", label: "externalId", type: "text"},
    ]

    const loginFormInitialValues = {
        createdBy: username,
        stakeholder: username,
        job: "",
        externalId: ""
    }

    const onSubmitFormik = async (values:any) => {
        try { 
            const response = await axios.post(`${baseUrl}/jobs`, values, {withCredentials: true}); 
            const reduxState = {isToken: true}
            dispatch(jobsAction(undefined) as unknown as AnyAction)
            dispatch(cacheAction(undefined) as unknown as AnyAction)
            cb()
        } catch (error:any ){ 
            const {message} = error;
            setErrorMessage(message);
            setOpenSnackBar(!openSnackBar)
        }
        
        // dispatch(navigationAction(reduxState) as unknown as AnyAction);

    }

    const validationSchema = {
        createdBy: Yup.string().required("this field is required"),
        stakeholder: Yup.string().required("this field is required"),
        job: Yup.string().required("this field is required"),
        externalId: Yup.string().required("this field is required"),
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
                    fields={loginFormFields} 
                    initialValues={loginFormInitialValues} 
                    onSubmitFormik={onSubmitFormik} 
                    validationSchema={validationSchema}
                    customFormStyles={customFormStyles}
                    formName={"new job"}    
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