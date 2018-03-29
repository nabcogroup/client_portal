import React, { Component } from 'react'

import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import {Login} from './modules/login'
import {Dashboard} from './modules/dashboard'

class App extends Component {
	
	render() {
		return (
		<Router>
			<div>
		  		<Route exact path="/" exact component={Login} />
				<Route exact path="/login" exact component={Login} />
		  		<Route path="/dashboard" exact component={Dashboard} />
			</div>
		</Router>)	
	}
}



export default App;
