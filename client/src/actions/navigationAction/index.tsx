import { Dispatch } from "redux"

const actionTypes = {
    loading: 'NAVIGATION_LOADING',
    success: 'NAVIGATION_SUCCESS',
    error: 'NAVIGATION_ERROR'
}

const navigationAction = (reduxState:any) => async (dispatch:Dispatch) =>{
    try {
        
        //loading
        dispatch({
            type: actionTypes.loading,
        });

        //action
        console.log("login", {reduxState})
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

export default navigationAction;