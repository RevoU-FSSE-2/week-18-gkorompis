import { CustomizedForm } from "..";
import * as Yup from 'yup'
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { cacheAction, jobsAction, navigationAction, usersAction } from '../../actions';
import { AnyAction } from '@reduxjs/toolkit';


import "./index.css"

interface ModalFormInitialValues {
    name: string,
    email:string,
    username: string,
    role: string,
}
interface ModalFormProps {
    cb?:any;
    documents?:any;
}

const ModalForm = ({cb, documents}:ModalFormProps) =>{

    const baseUrl = "http://localhost:5002"

    const dispatch = useDispatch();
    
    const userFormFields = [
        {name: "name", label: "name", type: "text"},
        {name: "email", label: "email", type: "email"},
        {name: "username", label: "username", type: "text"},
        {name: "role", label: "role", type: "text"},
    ]

    const userFormInitialValues = {
        name: documents && documents.name,
        email: documents && documents.email,
        username: documents && documents.username,
        role: documents && documents.role,
    }
    const onSubmitFormik = async (values:any) => {
        console.log("form value", values);
        
        const documentId = documents && documents._id;
        alert(documentId);
        const response = await axios.put(`${baseUrl}/users/one/${documentId}`, values);
        dispatch(usersAction(undefined) as unknown as AnyAction)
        dispatch(cacheAction(undefined) as unknown as AnyAction)
        cb()
    }

    const validationSchema = {
        name: Yup.string().required("Name is required"),
        email: Yup.string().required("Email is required").email("require valid email"),
        username: Yup.string().required("Username is required"),
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
        <div className="app-modal-form div-center-xy-column bg-blur">
            <h3 className="app-modal-form-h3">jobprints</h3>
            <CustomizedForm<ModalFormInitialValues> 
                fields={userFormFields} 
                initialValues={userFormInitialValues} 
                onSubmitFormik={onSubmitFormik} 
                validationSchema={validationSchema}
                customFormStyles={customFormStyles}
                formName={"edit user"} 
                cb={cb}      
                isCancelButton={true}
            />
        </div> 
    )
};

export default ModalForm;