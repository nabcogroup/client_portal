import React, { Component } from 'react';


import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';


class App extends Component {
  
  constructor(props) {
    
    super(props);
    
    this.toggle = this.toggle.bind(this);

  }

  toggle() {

  }

  renderLogin() {
    return (
      <main className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-3">
              
            </div>
          </div>
      </main>
    )
  }


  render() {
    
    return (
      <Dashboard/>
    );
  }
}

export default App;
