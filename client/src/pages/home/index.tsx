
import "./index.css"
import { LandingPage, LoginPage, JobBoardPage } from "../../container";

import { useDispatch, useSelector } from "react-redux";
import { useEffect , useState} from "react";
import { navigationAction} from "../../actions";
import { AnyAction } from "@reduxjs/toolkit";
import { LinearProgressMUI } from "../../components";

import jwt from 'jwt-decode'


const changeBackgroundPerInterval = (cb:any) =>{
    const interval = setInterval(() => {
            const min = 100;
            const max = 101;
            const newRandomNumber = Math.floor(Math.random() * (max - min + 1) + min);
            cb(newRandomNumber);
            // console.log(">>>random number", newRandomNumber);
        }, 30000); // 30 seconds in milliseconds

        return () => {
            clearInterval(interval);
    };
}

const AppComponent = () =>{
    const [randomNumber, setRandomNumber] = useState(0);
    const appPagesStyle = {
    backgroundImage: `url("/app-bg/appBg${randomNumber}.png")`,
    backgroundSize: "cover",
    transition: "1s"
}

    const dispatch = useDispatch();
    const navigationState = useSelector((state:any)=>state.navigation)
    const {loading, error, payload, message} = navigationState;
    const isLogin = payload && payload.isLogin;
    const isToken = payload && payload.isToken;
    
    useEffect(()=>{
        if(!isToken){
            const reduxState = {isLogin: false}
            dispatch(navigationAction(reduxState) as unknown as  AnyAction);
        }
        // changeBackgroundPerInterval(setRandomNumber);
    }, [dispatch])

    return (
        <div id="app-page-home" className="app-pages" style={appPagesStyle}>
            {
                loading ? <LinearProgressMUI/> :
                error ? <h1> {message} </h1> : 
                (<>
                    {
                        isToken ? <JobBoardPage/> : 
                        (
                            <>
                                <LandingPage/>
                                {isLogin ? <LoginPage/> : null}
                            </>
                        )
                    }
                    
                </>)
            }        
        </div>
    )
};

export default AppComponent;