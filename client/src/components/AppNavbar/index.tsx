import "./index.css"
import axios from  "axios"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { navigationAction } from "../../actions";
import { AnyAction } from "@reduxjs/toolkit";
const AppNavbar = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const linkToJobs = () =>{
        navigate('/')
    };
    const linkToProfile = () =>{
        navigate('/profile')
    };

    const linkToLogout = async () =>{
        const baseUrl = "https://edpkdmygqf.execute-api.ap-southeast-3.amazonaws.com/dev" || "http://localhost:5002"
        const response = await axios.post(`${baseUrl}/logout`, {body: "here"} ,{headers:{'Content-Type':'application/json'},withCredentials: true}) 
        dispatch(navigationAction(undefined) as unknown as AnyAction)
        navigate('/')
    }

    return (
        <>
            <div className="app-navbar-div slide-on-hover">
                <h3 className="app-navbar-logo-font">jobsprint</h3>
                <div className="app-navbar-anchors">
                    <a onClick={linkToJobs}>jobs</a>
                     <a onClick={linkToProfile}>profile</a>
                    <a onClick={linkToLogout}>logout</a>
                </div>
            </div>
        </>
    )
}

export default AppNavbar;