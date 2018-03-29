import React, {Component} from "react";
import {connect} from 'react-redux'

import {Navbar, NavbarToggler, NavbarBrand} from 'reactstrap'
import {MdSave}  from 'react-icons/lib/md';

import ProfileView from './profile-view';
import RequestList from './request-list';
import RequestForm from './request-form';


import api from '../../utils/api';




class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentView: "request",
            profile : {},
            request: {}
        }

        this.renderPartialComponent = this.renderPartialComponent.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.createNew = this.createNew.bind(this);

    }

    componentDidMount() {
        
    }

   
    createNew() {
        this.setState(prevState => ({currentView: "entry"}));
    }

    renderPartialComponent() {
        if(this.state.currentView == 'profile') {
            return (<ProfileView data={this.state.profile} parent={this} />)
        }
        else if(this.state.currentView == 'request') {
            return (<RequestList onCreateNew={this.createNew}/>);
        }
        else {
            return (<RequestForm/>)
        }
    }


    handleMenuClick(e) {

        e.preventDefault();
        
        this.setState({currentView: e.target.name});
    }


    render() {

        const pagePadding = {
            paddingTop: "15px",
            paddingBottom: "15px"
        }
        
        return (
            <div id="wrapper">
                <div className="sidebar">
                    <div className="sidebar-brand"></div>
                    <ul className="sidebar-nav">
                        <li><a href="#" name="profile" onClick={this.handleMenuClick}>View Profile</a></li>
                        <li><a href="#" name="request" onClick={this.handleMenuClick}>View Leave Request</a></li>
                    </ul>
                </div>
                
                <div>
                    <Navbar color="dark" dark expand="md">
                        <NavbarBrand href="/">Employee Portal</NavbarBrand>
                    </Navbar>
                    <div className="container-fluid">
                        <div className="row justify-content-center" style={pagePadding}>
                            <div className="col-md">
                                {this.renderPartialComponent()}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

const dashboardPage = Dashboard;
export {dashboardPage as Dashboard};