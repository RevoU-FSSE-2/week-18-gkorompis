import {Reducer} from 'redux';

const actionTypes = {
    loading: 'RELOAD_JOBS_LOADING',
    success: 'RELOAD_JOBS_SUCCESS',
    error: 'RELOAD_JOBS_ERROR'
}
const stateDefault = {
    loading: true,
    payload: false
}
const navigationReducer:Reducer = (state=stateDefault, action) =>{
    switch (action.type){
        case actionTypes.loading:
            return {loading: true}
        case actionTypes.success:
            return {loading: false, payload: action.payload}
        case actionTypes.error:
            return {error: true, message: action.message}
        default:
            return state
    }
};
export default navigationReducer;