import  { Component } from 'react';
import Header  from './layout/Header';
import Dashboard from './customers/Dashboard';

class App extends Component {


  
      render() {
          return (<div>
            <Header/>
            <Dashboard/>
            </div>
          )}
}
export default App;
