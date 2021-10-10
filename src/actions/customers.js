import axios from 'axios';
import { GET_CUSTOMERS, DELETE_CUSTOMER, ADD_CUSTOMER } from './types';

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
      .catch((err) =>console.log(err));

}
//DELETE CUSTOMER
export const deleteCustomer = (id) => (dispatch) => {
  axios
    .delete(`/api/customers/${id}/`)
    .then(() => {
   
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
        
        dispatch({
          type: ADD_CUSTOMER,
          payload: res.data,
        });
      })
      .catch((err) =>console.log(err));
      
  };
  