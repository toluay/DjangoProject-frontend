import { combineReducers } from 'redux';
import customers from './customers';
import errors from './errors';


export default combineReducers({
    customers,
    errors,
});