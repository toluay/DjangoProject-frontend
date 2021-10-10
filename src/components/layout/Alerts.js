import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';


export class Alerts extends Component {


    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
    };


        componentDidUpdate(prevProps) {
            const { error} = this.props;

            if (error !== prevProps.error) {
                alert.error('there is an error ');
                if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
                if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
                if (error.msg.message) alert.error(`Message: ${error.msg.message.join()}`);
                if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
                if (error.msg.username) alert.error(error.msg.username.join());
            }
            if (message !== prevProps.message) {
                if (message.deleteCustomer) alert.success(message.deleteCustomer);
                if (message.addCustomer) alert.success(message.addCustomer);
                if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
              }

        }

        
    // componentDidMount() {
    //     this.props.alert.show('It works ');
    // }

    render() {
        return <Fragment />;
      }

      }


      const mapStateToProps = (state) => ({
        error: state.errors,
        message: state.messages,
      })


 export default connect(mapStateToProps)(withAlert()(Alerts));