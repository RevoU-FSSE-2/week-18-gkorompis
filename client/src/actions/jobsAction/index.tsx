

import { Dispatch } from "redux"
import axios from 'axios';

const baseUrl = "https://edpkdmygqf.execute-api.ap-southeast-3.amazonaws.com/dev" || "http://localhost:5002"

const actionTypes = {
    loading: 'JOBS_LOADING',
    success: 'JOBS_SUCCESS',
    error: 'JOBS_ERROR'
}

const fetchCollectionJobs = async (baseUrl:string) =>{
    const response = await axios.get(`${baseUrl}/jobs`, {withCredentials: true})
    const {data }= response;
    // console.log({response});
    return data;
}

const logout = async (baseUrl:string) =>{
    const response = await axios.post(`${baseUrl}/logout`, {withCredentials: true})
    const {data }= response;
    // console.log({response});
    return data;
}

const jobsAction = (reduxState:any) => async (dispatch:Dispatch) =>{
    try {
        // console.log(">>>jobs action triggered")
        //loading
        dispatch({
            type: actionTypes.loading,
        });

        //action
        const response = await fetchCollectionJobs(baseUrl);
        reduxState = response;
        
        //success
        dispatch({
            type: actionTypes.success,
            payload: reduxState,
        })
    } catch(error:any){
        //error
        const {response, message} = error;
        const data = response && response.data;
        const messageServer = data && data.message;

        const errorMessage = error && `${message}. ${messageServer}` 
        dispatch({
            type: actionTypes.error,
            message: errorMessage,
        })
        if(messageServer.toLowerCase().includes("invalid")){
            console.log("invalid")
            const response = await axios.post(`${baseUrl}/logout`, {withCredentials: true}) 
        }
    }
}

export default jobsAction;