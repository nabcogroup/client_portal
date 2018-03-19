import React, {Component} from "react";
import {Navbar,NavbarToggler,NavbarBrand } from 'reactstrap'

export default class Dashboard extends Component {

    constructor() {
        
    }
    render() {
        return (
            <div id="wrapper">
                <div className="sidebar">
                    <div className="sidebar-brand"></div>
                    <ul className="sidebar-nav">
                        <li>
                            <a href="#">View Profile</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <Navbar color="dark" dark expand="md">
                        <NavbarBrand href="/">Employee Portal</NavbarBrand>
                    </Navbar>
                </div>
            </div>
        )
    }
}