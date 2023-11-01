import "./index.css"
import { useNavigate } from "react-router-dom";
const AppNavbar = () =>{
    const navigate = useNavigate();

    const linkToJobs = () =>{
        navigate('/')
    };
    const linkToProfile = () =>{
        navigate('/profile')
    };

    return (
        <>
            <div className="app-navbar-div slide-on-hover">
                <h3 className="app-navbar-logo-font">jobsprint</h3>
                <div className="app-navbar-anchors">
                    <a onClick={linkToJobs}>jobs</a>
                     <a onClick={linkToProfile}>profile</a>
                    <a>logout</a>
                </div>
            </div>
        </>
    )
}

export default AppNavbar;