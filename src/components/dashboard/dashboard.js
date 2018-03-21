import React, {Component} from "react";
import {Navbar,
        NavbarToggler,
        NavbarBrand,
        Button,
        Input,
        Form, FormGroup,Label,InputArea } from 'reactstrap'


import {MdSave}  from 'react-icons/lib/md';
import ProfileView from './profile-view';
import RequestList from './request-list';
import RequestEntry from './request-entry';

const api = require("../../utils/api")

export default class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentView: "request",
            profile : {},
            request: {}
        }

        this.fetchProfile = this.fetchProfile.bind(this);
        this.renderPartialComponent = this.renderPartialComponent.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.createNew = this.createNew.bind(this);

    }

    componentDidMount() {
        this.fetchProfile();
    }

    



    fetchProfile() {
        api.fetchProfileRepos().then((repos) => {
            this.setState(prevState =>  ({profile: repos}))
        });
    }

    createNew() {
        this.setState(prevState => ({currentView: "entry"}));
    }

    renderPartialComponent() {
        if(this.state.currentView == 'profile') {
            return (<ProfileView data={this.state.profile} parent={this} />)
        }
        else if(this.state.currentView == 'request') {
            return (<RequestList data={this.state.profile} onCreateNew={this.createNew}/>);
        }
        else {
            return (<RequestEntry data={this.state.profile}/>)
        }
    }


    handleMenuClick(e) {
        e.preventDefault();
        var name = e.target.name;
        this.setState(prevState => ({currentView: name}));
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