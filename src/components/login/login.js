import React, { Component } from 'react';

export default class Login extends Component {

    constructor(props) {

        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {
                email: '',
                password: ''
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(key, value) {
        this.setState({[key]: value});
    }


    handleSubmit(e) {

        e.preventDefault();

       
    }

    render() {

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
                                    <div className="form-group">
                                        <input id="email" type="email" className="form-control" name="email" />
                                        <span></span>
                                    </div>
                                    <div className="form-group">
                                        <input id="password" type="password" className="form-control" name="password" />
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