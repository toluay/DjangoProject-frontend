import axios from 'axios';
import { GET_CUSTOMERS, DELETE_CUSTOMER, ADD_CUSTOMER } from './types';
import { createMessage ,  returnErrors} from './messages';
import { tokenConfig } from './auth';

// GET CUSTOEMRS
export const getCustomers = () => (dispatch,getState)=>{
    axios
    .get('/api/customers/', tokenConfig(getState))
    .then((res) => {
        dispatch({
          type: GET_CUSTOMERS,
          payload: res.data,
        });
      })
      .catch((err) =>dispatch(returnErrors(err.response.data, err.response.status)));

}
//DELETE CUSTOMER
export const deleteCustomer = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/customers/${id}/`, tokenConfig(getState))
    .then(() => {
      dispatch(createMessage({ deleteCustomer: 'Customer Deleted' }));
      dispatch({
        type: DELETE_CUSTOMER,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD CUSTOMER
export const addCustomer = (customer) => (dispatch , getState) => {
    axios
      .post('/api/customers/', customer,  tokenConfig(getState))
      .then((res) => {
        dispatch(createMessage({ addCustomer: 'Customer Added' }));
        dispatch({
          type: ADD_CUSTOMER,
          payload: res.data,
        });
      })
      .catch((err) =>dispatch(returnErrors(err.response.data, err.response.status)));
      
  };
  