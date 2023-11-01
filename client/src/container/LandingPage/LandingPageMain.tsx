
import {useState} from 'react';
import { CustomizedButton } from "../../components";
import { CustomizedButtonProps } from "../../utils/types";
import { useDispatch } from 'react-redux';
import { navigationAction } from '../../actions';

import { AnyAction } from '@reduxjs/toolkit';


const LandingPageMain = () =>{

    // const [isLogin, setIsLogin] = useState(false);
    const dispatch = useDispatch();

    const customizedButtonHandler = () =>{
        console.log("customized button clicked now");
        // setIsLogin(true);
        
        const reduxState = {isLogin: true, isToken: false}
        dispatch(navigationAction(reduxState) as unknown as AnyAction);
    }
    const customizedButtonProps= {
        componentColor: {
            bgColorActive: "#C7BCA1",
            bgColorHover: "#F1D3B3",
            borderColor: "",
            borderColorHover: "",
        }, 
        buttonName: "START",
        onClick: customizedButtonHandler
    } as CustomizedButtonProps

    return (
       
        <div className="app-landing-page-main">
            <h1 className={"app-landing-page-main-h1"}>jobsprint</h1>
            <CustomizedButton 
                componentColor={customizedButtonProps.componentColor}
                buttonName={customizedButtonProps.buttonName}
                onClick={customizedButtonProps.onClick}
            />
            {/* {isLogin && <h1 className="fade-in active">Form</h1>} */}
        </div>
    )
};

export default LandingPageMain;