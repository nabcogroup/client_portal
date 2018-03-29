import React, { Component } from 'react'
import {Button} from 'reactstrap';
import {MdSave}  from 'react-icons/lib/md';
import {connect} from 'react-redux';

import {requestAction} from './../../actions/request-action';

class RequestList extends Component {
  

    constructor(props) {

        super(props);
        this.onApplyLeave = this.onApplyLeave.bind(this);
    }
    
    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(requestAction.fetchAllRequest());
    }

    onApplyLeave(e) {
        this.props.onCreateNew(e);
    }

    

    render() {

        const {request} = this.props;

        let items = (request.data) ? request.data : [];
        
        const listRequest = items.map((request) => {
            return (
                <tr key={request.created_at.toString()}>
                    <td>{request.leave_form[0].employee.employee_no}</td>
                    <td>{request.leave_form[0].employee.full_name}</td>
                    <td>{request.created_at}</td>
                    <td>{request.leave_form[0].leave_start}</td>
                    <td>{request.leave_form[0].leave_end}</td>
                    <td>{request.leave_form[0].no_of_days}</td>
                    <td>{request.leave_form[0].purpose}</td>
                    <td>{request.leave_form[0].status}</td>
                </tr>
            )
        });
    
        return (
            <div className="card">
                <div className="card-header bg-secondary text-white">Leave Request</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <Button color="primary" name="entry" onClick={(e) => this.onApplyLeave(e)}><MdSave/> Apply Leave</Button>
                            <hr/>
                        </div>
                        
                        <div className="col-md-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Employee No</th>
                                        <th>Full Name</th>
                                        <th>Date Requested</th>
                                        <th>Leave Start</th>
                                        <th>Leave End</th>
                                        <th>No. of Days</th>
                                        <th>Purpose</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listRequest}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </div>
        )
  }
}


const mapStateToProps = state => ({
    request: state.leaveRequest.requests
})

export default connect(mapStateToProps,null)(RequestList);