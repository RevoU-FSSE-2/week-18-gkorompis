import {Reducer} from 'redux';

const actionTypes = {
    loading: 'CACHE_LOADING',
    success: 'CACHE_SUCCESS',
    error: 'CACHE_ERROR'
}
const stateDefault = {
    loading: true,
    payload: false
}
const cacheReducer:Reducer = (state=stateDefault, action) =>{
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
export default cacheReducer;