import React from 'react';


const ProfileView = (props) => {
    return (
        <div className="card">
            <div className="card-header bg-secondary text-white">Employee Profile</div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">
                        <img src="" className="thumbnail"/>
                    </div>
                    <div className="col-md">
                        <div className="form-group row">
                            <label className="col-md-2">Employee No:</label>
                            <label className="col-md">{props.data.employee_no}</label>
                        </div>            
                        <div className="form-group row">
                            <label className="col-md-2">Name:</label>
                            <label className="col-md">
                            {props.data.last_name} {props.data.first_name} 
                            </label>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-2">Nationality:</label>
                            <label className="col-md">{props.data.nationality}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default ProfileView;