import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';


export class Alerts extends Component {


    static propTypes = {
        error: PropTypes.object.isRequired,};


        componentDidUpdate(prevProps) {
            const { error} = this.props;

            if (error !== prevProps.error) {
                alert.error('there is an error ');
                if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
                if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
                if (error.msg.message) alert.error(`Message: ${error.msg.message.join()}`);
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
      })


 export default connect(mapStateToProps)(withAlert()(Alerts));