
import "./index.css"
import { LandingPage, LoginPage } from "../../container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { navigationAction } from "../../actions";

import { AnyAction } from "@reduxjs/toolkit";

const AppComponent = () =>{
    const dispatch = useDispatch();
    const navigationState = useSelector((state:any)=>state.navigation)
    const {loading, error, payload} = navigationState;

    const isLogin = payload && payload.isLogin
    
    useEffect(()=>{
        const reduxState = {isLogin: false}
        dispatch(navigationAction(reduxState) as unknown as  AnyAction);
    }, [dispatch])

    return (
        <div id="app-page-home" className="app-pages">
            {
                loading ? <h1>loading...</h1> :
                error ? <h1> error </h1> :
                (<>
                    <LandingPage/>
                    {isLogin ? <LoginPage/> : null}
                </>)
            }        
        </div>
    )
};

export default AppComponent;