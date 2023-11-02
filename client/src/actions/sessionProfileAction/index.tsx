import { Dispatch } from "redux"

const actionTypes = {
    loading: 'SESSION_LOADING',
    success: 'SESSION_SUCCESS',
    error: 'SESSION_ERROR'
}

const editingAction = (reduxState:any) => async (dispatch:Dispatch) =>{
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

export default editingAction;