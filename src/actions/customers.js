import axios from 'axios';
import { GET_CUSTOMERS, DELETE_CUSTOMER, ADD_CUSTOMER, GET_ERRORS } from './types';
import { createMessage ,  returnErrors} from './messages';

// GET CUSTOEMRS
export const getCustomers = () => (dispatch)=>{
    axios
    .get('/api/customers/')
    .then((res) => {
        dispatch({
          type: GET_CUSTOMERS,
          payload: res.data,
        });
      })
      .catch((err) =>dispatch(returnErrors(err.response.data, err.response.status)));

}
//DELETE CUSTOMER
export const deleteCustomer = (id) => (dispatch) => {
  axios
    .delete(`/api/customers/${id}/`)
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
export const addCustomer = (customer) => (dispatch) => {
    axios
      .post('/api/customers/', customer)
      .then((res) => {
        dispatch(createMessage({ addCustomer: 'Customer Added' }));
        dispatch({
          type: ADD_CUSTOMER,
          payload: res.data,
        });
      })
      .catch((err) =>dispatch(returnErrors(err.response.data, err.response.status)));
      
  };
  