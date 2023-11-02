import { Dispatch } from "redux"


const actionTypes = {
    loading: 'AUTHENTICATION_LOADING',
    success: 'AUTHENTICATION_SUCCESS',
    error: 'AUTHENTICATION_ERROR'
}


const navigationAction = (reduxState:any) => async (dispatch:Dispatch) =>{
    try {
        //loading
        dispatch({
            type: actionTypes.loading,
        });

        //action
        // console.log("login", {reduxState})
        //success
        dispatch({
            type: actionTypes.success,
            payload: reduxState,
        })
    } catch(error){
        //error
        // console.log(">>>action error", {actionError: error})
        dispatch({
            type: actionTypes.error,
            message: error,
        })
    }
}

export default navigationAction;