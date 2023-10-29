
import "./index.css"
import { LandingPage, LoginPage } from "../../container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect , useState} from "react";
import { navigationAction } from "../../actions";

import { AnyAction } from "@reduxjs/toolkit";


const changeBackgroundPerInterval = (cb:any) =>{
    const interval = setInterval(() => {
            const min = 1;
            const max = 8;
            const newRandomNumber = Math.floor(Math.random() * (max - min + 1) + min);
            cb(newRandomNumber);
            // console.log(">>>random number", newRandomNumber);
        }, 13000); // 30 seconds in milliseconds

        return () => {
            clearInterval(interval);
    };
}

const AppComponent = () =>{
    const [randomNumber, setRandomNumber] = useState(1);
    const appPagesStyle = {
    backgroundImage: `url("/app-bg/appBg${randomNumber}.png")`,
    backgroundSize: "cover",
    transition: "1s"
}

    const dispatch = useDispatch();
    const navigationState = useSelector((state:any)=>state.navigation)
    const {loading, error, payload} = navigationState;
    const isLogin = payload && payload.isLogin;
    const isToken = payload && payload.isToken;
    
    useEffect(()=>{
        const reduxState = {isLogin: false}
        dispatch(navigationAction(reduxState) as unknown as  AnyAction);

        changeBackgroundPerInterval(setRandomNumber);
    }, [dispatch])

    return (
        <div id="app-page-home" className="app-pages" style={appPagesStyle}>
            {
                loading ? <h1>loading...</h1> :
                error ? <h1> error </h1> :
                (<>
                    {
                        isToken ? <h1>Task Board</h1> : 
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