import {Reducer} from 'redux';

const actionTypes = {
    loading: 'NAVIGATION_LOADING',
    success: 'NAVIGATION_SUCCESS',
    error: 'NAVIGATION_ERROR'
}
const stateDefault = {
    loading: false,
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