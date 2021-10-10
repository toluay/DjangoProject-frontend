import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCustomers, deleteCustomer } from '../../actions/customers';

export class Customers extends Component {
  static propTypes = {
    customers: PropTypes.array.isRequired,
    getCustomers: PropTypes.func.isRequired,
    deleteCustomer: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCustomers();
  }
    render() {
        return (
          <Fragment>
            <h2>Customers</h2>
            <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.message}</td>
                <td>
                  <button
                    onClick={this.props.deleteCustomer.bind(this, customer.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {' '}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customers.customers,
});
export default connect(mapStateToProps, { getCustomers, deleteCustomer }) (Customers);