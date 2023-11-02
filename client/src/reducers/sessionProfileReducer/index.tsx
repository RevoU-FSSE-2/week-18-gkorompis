import {Reducer} from 'redux';

const actionTypes = {
    loading: 'SESSION_LOADING',
    success: 'SESSION_SUCCESS',
    error: 'SESSION_ERROR'
}
const stateDefault = {
    loading: true,
    payload: false
}
const sessionProfileReducer:Reducer = (state=stateDefault, action) =>{
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
export default sessionProfileReducer;