

import { Dispatch } from "redux"
import axios from 'axios';

const baseUrl = "https://edpkdmygqf.execute-api.ap-southeast-3.amazonaws.com/dev" || "http://localhost:5002"

const actionTypes = {
    loading: 'USERS_LOADING',
    success: 'USERS_SUCCESS',
    error: 'USERS_ERROR'
}

const fetchCollectionUsers = async (baseUrl:string) =>{
    const response = await axios.get(`${baseUrl}/users`, {withCredentials: true})
    const {data }= response; 
    return data;
}

const usersAction = (reduxState:any) => async (dispatch:Dispatch) =>{
    try {
        console.log(">>>users action triggered")
        //loading
        dispatch({
            type: actionTypes.loading,
        });

        // action
        const response = await fetchCollectionUsers(baseUrl);
        reduxState = response; 
        
        //success
        dispatch({
            type: actionTypes.success,
            payload: reduxState,
        })
    } catch(error:any){
        //error 
        const errorMessage = error && error.message 
        dispatch({
            type: actionTypes.error,
            message: errorMessage,
        })
    }
}

export default usersAction;