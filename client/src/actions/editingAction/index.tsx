import { Dispatch } from "redux"

const actionTypes = {
    loading: 'EDITING_LOADING',
    success: 'EDITING_SUCCESS',
    error: 'EDITING_ERROR'
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