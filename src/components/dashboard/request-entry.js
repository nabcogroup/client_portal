import React,{Component} from 'react';
import {Button,Input, Form, FormGroup,Label,InputArea } from 'reactstrap';
import api from "../../utils/api";

export default class RequestEntry extends Component {
    

    constructor(props) {
        
        super(props);

        this.state = {
            requestType: '',
            leaveFrom: null,
            leaveTo: null,
            returnDate: null,
            flightDate: null,
            transportation: '',
            countryOfDestination: '',
            reason: ''
        }

        this.createRequest = this.createRequest.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveRequest = this.saveRequest.bind(this);
    }

   

    handleChange(event) {
        const {name,value} = event.target;
        this.setState({[name] : value });
    }

    componentDidMount() {
        this.createRequest();
    }
    

    createRequest() {
        
        api.fetchCreateRequest().then((repos) => {
             this.setState(prevState => (
                {
                    requestType: repos.request_type, 
                    leaveFrom  : repos.body.leave_from,
                    leaveTo: repos.body.leave_to,
                    returnDate: repos.body.return_date,
                    flightDate: repos.body.flight_date,
                    transportation: repos.body.transportation,
                    countryOfDestination: repos.body.country_of_destination,
                    reason: repos.reason
                }
             ));
        });
    }

    saveRequest(submit) {
        
        const data = {
            reason: this.state.reason,
            request_type: this.state.requestType,
            status: submit,
            body: {
                flight_date: this.state.flightDate,
                leave_from: this.state.leaveFrom,
                leave_to: this.state.leaveTo,
                return_date: this.state.returnDate,
                country_of_destination: this.state.countryOfDestination,
                transportation: this.state.transportation,
            }
        };

        api.saveRequest(data).then((repos) => {
            //
            
        });
    }



    render() {

        return (
            <Form>
                <div className="card">
                    <div className="card-header bg-secondary text-white">Leave Request Entry</div>
                    <div className="card-body">
                        <FormGroup>
                            <Label>Leave From</Label>
                            <input 
                                type="date" 
                                name="leaveFrom"
                                value={this.state.leaveFrom}
                                onChange={this.handleChange} 
                                className="form-control"
                                />
                           
                        </FormGroup>
                        <FormGroup>
                            <Label>Leave To</Label>
                            <input 
                                type="date" 
                                name="leaveTo"
                                value={this.state.leaveTo}
                                onChange={this.handleChange} 
                                className="form-control"
                                />
                           
                        </FormGroup>
                        <FormGroup>
                            <Label>Flight Date</Label>
                            <input 
                                type="date" 
                                name="flightDate"
                                value={this.state.flightDate}
                                onChange={this.handleChange} 
                                className="form-control"
                                />
                        </FormGroup>
                        <FormGroup>
                            <Label>Return Date</Label>
                            <input 
                                type="date" 
                                name="returnDate"
                                value={this.state.returnDate}
                                onChange={this.handleChange} 
                                className="form-control"
                                />
                        </FormGroup>
                        <FormGroup>
                            <Label>Transportation</Label>
                            <input 
                                type="text" 
                                name="transportation"
                                value={this.state.transportation}
                                onChange={this.handleChange} 
                                className="form-control"
                                />
                        </FormGroup>
                        <FormGroup>
                            <Label>Country of Destination</Label>
                            <input 
                                type="text" 
                                name="countryOfDestination"
                                value={this.state.countryOfDestination}
                                onChange={this.handleChange} 
                                className="form-control"
                                />
                        </FormGroup>
                        <FormGroup>
                            <Label>Reason</Label>
                            <textarea 
                                name="reason"
                                value={this.state.reason}
                                onChange={this.handleChange} 
                                className="form-control"
                                />
                        </FormGroup>
                    </div>
                    <div className="card-footer">
                        <Button onClick={e => this.saveRequest('pending')} color="success">Submit</Button>&nbsp;
                        <Button onClick={e => this.saveRequest('draft')} color="secondary">Draft</Button>
                    </div>
                </div>
            </Form>
        )
    }
}