

import { Dispatch } from "redux"
import axios from 'axios';

const baseUrl = 'http://localhost:5002'

const actionTypes = {
    loading: 'USERS_LOADING',
    success: 'USERS_SUCCESS',
    error: 'USERS_ERROR'
}

const fetchCollectionUsers = async (baseUrl:string) =>{
    const response = await axios.get(`${baseUrl}/users`)
    const {data }= response;
    // console.log({response});
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
        console.log(">>>reduxState", {response})
        
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

export default usersAction;