import React from 'react';
import {Button} from 'reactstrap';
import {MdSave}  from 'react-icons/lib/md';


//component leaverequest
const RequestList = (props) => {

    let items = (props.data.request) ? props.data.request : [];
    
    const listRequest = items.map((request) => {
        return (
            <tr key={request.created_at.toString()}>
                <td>{request.created_at}</td>
                <td>{request.body.flight_date}</td>
                <td>{request.body.leave_from}</td>
                <td>{request.body.leave_to}</td>
                <td>{request.body.return_date}</td>
                <td>{request.status}</td>
                <td>
                    <Button color="success">Edit</Button>&nbsp;<Button color="danger">Cancel</Button>
                </td>
            </tr>
        )
    });

    return (
        <div className="card">
            <div className="card-header bg-secondary text-white">Leave Request</div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-12">
                        <Button color="primary" onClick={props.onCreateNew} name="entry"><MdSave/> Create Leave Request</Button>
                        <hr/>
                    </div>
                    
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Date Requested</th>
                                    <th>Flight Date</th>
                                    <th>Leave From</th>
                                    <th>Leave To</th>
                                    <th>Return Date</th>
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

export default RequestList;