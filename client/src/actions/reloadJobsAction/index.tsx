import { Dispatch } from "redux"

const actionTypes = {
    loading: 'RELOAD_JOBS_LOADING',
    success: 'RELOAD_JOBS_SUCCESS',
    error: 'RELOAD_JOBS_ERROR'
}

const reloadJobsAction = (reduxState:any) => async (dispatch:Dispatch) =>{
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

export default reloadJobsAction;