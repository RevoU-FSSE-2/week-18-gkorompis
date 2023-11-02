import { CustomizedForm, SnackBarMui } from "../../components";
import * as Yup from 'yup'
import axios from 'axios'

import { useDispatch } from 'react-redux';
import { navigationAction, sessionProfileAction } from '../../actions';
import { AnyAction } from '@reduxjs/toolkit';

import { useState } from "react";


interface LoginFormInitialValues {
    username: string,
    password: string
}

const LoginPageMain = () =>{

    const [openSnackBar,setOpenSnackBar] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const baseUrl = "https://edpkdmygqf.execute-api.ap-southeast-3.amazonaws.com/dev" || "http://localhost:5002"

    const dispatch = useDispatch();
    
    const loginFormFields = [
        {name: "username", label: "username", type: "text"},
        {name: "password", label: "password", type: "password"}
    ]

    const loginFormInitialValues = {
        username: "",
        password: ""
    }

    const onSubmitFormik = async (values:any) => {
        try { 
            const {username} = values
            const response:any = await axios.post(`${baseUrl}/login/auth`, values, {withCredentials: true}); 
            const data = response && response.data
            const reduxState = {isToken: true, isLogin: false, tokens: data}
            dispatch(navigationAction(reduxState) as unknown as AnyAction);
            const sessionProfile = {
                username
            }
            dispatch(sessionProfileAction(sessionProfile) as unknown as AnyAction)
        } catch (error:any){ 
            const {message} = error;
            setErrorMessage(message);
            setOpenSnackBar(!openSnackBar)
        }
    }

    const validationSchema = {
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required")
        .min(8, 'Password must be at least 8 characters long')
        .matches(/^(?=.*[a-zA-Z])(?=.*\d)/, 'Password must be alphanumeric')
    }

    const customFormStyles = {
        label: {
            color: "#F1F0E8"
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
            <div className="app-login-page-main div-center-xy-column bg-blur">
                <h3 className="app-login-page-main-h3">jobsprint</h3>
                <CustomizedForm<LoginFormInitialValues> 
                    fields={loginFormFields} 
                    initialValues={loginFormInitialValues} 
                    onSubmitFormik={onSubmitFormik} 
                    validationSchema={validationSchema}
                    customFormStyles={customFormStyles}
                    formName={"log in"}       
                    isCancelButton={false}
                />
            </div>
            <div>
                <SnackBarMui openSnackBar={openSnackBar} setOpenSnackBar={setOpenSnackBar} message={errorMessage}/>
            </div>
        </>
        
    )
};

export default LoginPageMain;