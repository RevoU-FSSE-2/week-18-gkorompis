

import { Dispatch } from "redux"
import axios from 'axios';

const baseUrl = 'http://localhost:5002'

const actionTypes = {
    loading: 'JOBS_LOADING',
    success: 'JOBS_SUCCESS',
    error: 'JOBS_ERROR'
}

const fetchCollectionJobs = async (baseUrl:string) =>{
    const response = await axios.get(`${baseUrl}/jobs`)
    const {data }= response;
    // console.log({response});
    return data;
}

const jobsAction = (reduxState:any) => async (dispatch:Dispatch) =>{
    try {
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
    } catch(error){
        //error
        dispatch({
            type: actionTypes.error,
            message: error,
        })
    }
}

export default jobsAction;