import React,{Component} from 'react';

import {Button,Input, Form, FormGroup,Label,InputArea } from 'reactstrap';
import {connect} from 'react-redux';
import {requestAction} from './../../actions/request-action';
import {reduxForm, Field} from 'redux-form';
import api from "../../utils/api";


const _ = require('lodash');


const renderInputField = ({input,meta,prop}) => (
    <div className="form-group row">
        <label className={prop.labelClass} >{prop.label}</label>      
        <div className={prop.inputClass}>
            <input {...input}   className="form-control"/>
        </div>
    </div>
);


const renderDateField = ({input,meta,prop}) => (
    <div className="form-group row">
        <label className={prop.labelClass} >{prop.label}</label>      
        <div className={prop.inputClass}>
            <input {...input} type="date"   className="form-control"/>
        </div>
    </div>
);

const renderNumericField = ({input,meta,prop}) => (
    <div className="form-group row">
        <label className={prop.labelClass} >{prop.label}</label>      
        <div className={prop.inputClass}>
            <input {...input} type="number"   className="form-control"/>
        </div>
    </div>
);

const renderTextAreaField = ({input,meta,prop}) => (
    <div className="form-group row">
        <label className={prop.labelClass} >{prop.label}</label>      
        <div className={prop.inputClass}>
            <textarea {...input} type="date"   className="form-control"></textarea>
        </div>
    </div>
);



const onSubmit = (formData,dispatch) => {
    dispatch(requestAction.saveRequest(formData));
}

class RequestForm extends Component {
    
    constructor(props) {
        super(props);

        
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(requestAction.createNewRequest())
    }
    
    render() {
        
        const {initialValues,submitting,handleSubmit,pristine} = this.props;
        
        return (
            <form className="form" onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-header bg-secondary text-white">Leave Form</div>
                    <div className="card-body">
                        <Field name="employeeNo" 
                            component={renderInputField}
                            prop={{label:'Employee No',labelClass:'col-md-2',inputClass:'col-md-6'}} />
                         <div className="form-group row">
                            <label htmlFor="" className="col-md-2">Full Name:</label>      
                            <label className="col-md-4 input-group">{initialValues.fullName}</label>   
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-md">
                                <h4 className="card-title">Leave Entry</h4>
                                
                                <Field name="leaveStart" 
                                    component={renderDateField} 
                                    prop={{label:'Leave Start',labelClass:'col-md-2',inputClass:'col-md'}} />

                                <Field name="noOfDays" 
                                    component={renderNumericField} 
                                    prop={{label:'No of Days Leave',labelClass:'col-md-2',inputClass:'col-md'}} />

                                <Field name="purpose" 
                                    component={renderTextAreaField} 
                                    prop={{label:'Purpose',labelClass:'col-md-2',inputClass:'col-md'}} />

                                <Field name="countryOfDestination" 
                                    component={renderInputField} 
                                    prop={{label:'Country Of Destination',labelClass:'col-md-2',inputClass:'col-md'}} />

                                <Field name="personToContact" 
                                    component={renderInputField} 
                                    prop={{label:'Person To Contact',labelClass:'col-md-2',inputClass:'col-md'}} />
                                
                                <Field name="personContactNo" 
                                    component={renderInputField} 
                                    prop={{label:'Person Contact No',labelClass:'col-md-2',inputClass:'col-md'}} />

                                <Field name="placeToStay" 
                                    component={renderInputField} 
                                    prop={{label:'Place to Stay',labelClass:'col-md-2',inputClass:'col-md'}} />

                                <Field name="travelDate" 
                                    component={renderDateField} 
                                    prop={{label:'Travel Date',labelClass:'col-md-2',inputClass:'col-md'}} />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-md-3">
                            <button className="btn btn-primary btn-block" disabled={pristine || submitting}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

RequestForm = reduxForm({
    form: 'RequestForm',
    enableReinitialize: true,
    onSubmit
})(RequestForm)

RequestForm = connect(state => ({
    initialValues: state.leaveRequest.request
}) , null)(RequestForm)
export default RequestForm;