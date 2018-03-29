import React, { Component } from 'react';

import {connect} from 'react-redux';
import {authAction} from './../../actions/auth-action'

class Login extends Component {

    constructor(props) {
        
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    

    handleSubmit(e) {
        e.preventDefault();
       
       const {dispatch} = this.props;

       dispatch(authAction.authenticate({
            email:this.email.value,
            password: this.password.value}));
        
    }

    render() {
        
        const {login} = this.props;
        const message = !login.isOk ? login.message : "";

        return (
            <main className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-3">
                        <form action=""
                            className="form"
                            onSubmit={this.handleSubmit}>
                            <div className="card">
                                <div className="card-header">< i className="fa fa-user"> </i> Login</div>
                                <div className="card-body">
                                    <span>{message}</span>
                                    <div className="form-group">
                                        <input id="email" type="email" className="form-control" name="email" ref={input => this.email = input} />
                                        <span></span>
                                    </div>
                                    <div className="form-group">
                                        <input id="password" type="password" className="form-control" ref={input => this.password = input} name="password" />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-info" type="submit"> Log in</button>
                                </div>
                            </div>
                        </form>  
                    </div>
                </div>
            </main>
        );
    }
}



const mapStateToProps = state => ({
    login: state.login
})

const connectedLoginPage = connect(mapStateToProps)(Login);
export {connectedLoginPage as Login};