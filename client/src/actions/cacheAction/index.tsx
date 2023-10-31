import { Dispatch } from "redux"

const actionTypes = {
    loading: 'CACHE_LOADING',
    success: 'CACHE_SUCCESS',
    error: 'CACHE_ERROR'
}

const cacheAction = (reduxState:any) => async (dispatch:Dispatch) =>{
    try {
        //loading
        dispatch({
            type: actionTypes.loading,
        });

        //action

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

export default cacheAction;