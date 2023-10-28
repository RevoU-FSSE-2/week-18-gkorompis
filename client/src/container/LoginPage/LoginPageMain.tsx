import { CustomizedForm } from "../../components";
import * as Yup from 'yup'

interface LoginFormInitialValues {
    username: string,
    password: string
}

const LoginPageMain = () =>{
    
    const loginFormFields = [
        {name: "username", label: "username", type: "text"},
        {name: "password", label: "password", type: "password"}
    ]

    const loginFormInitialValues = {
        username: "",
        password: ""
    }

    const onSubmitFormik = async (values:any) => {
        console.log("form value", values)
    }

    const validationSchema = {
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required")
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
        <div className="app-login-page-main div-center-xy-column bg-blur">
            <h3 className="app-login-page-main-h3">jobprints</h3>
            <CustomizedForm<LoginFormInitialValues> 
                fields={loginFormFields} 
                initialValues={loginFormInitialValues} 
                onSubmitFormik={onSubmitFormik} 
                validationSchema={validationSchema}
                customFormStyles={customFormStyles}
                formName={"log in"}       
            />
        </div>
    )
};

export default LoginPageMain;