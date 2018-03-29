

const _ = require('lodash');

export const loginConstant = {
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    TOKEN_EXIST: 'TOKEN_EXIST'   
}


export const profileConstant = {
    FETCH_PROFILE: 'FETCH_PROFILE'
}

export const requestConstant = {
    FETCH_ALL: 'requestConstant/FETCH_ALL',
    CREATE_NEW: 'requestConstant/CREATE_NEW',
    CHANGE_PROPS: 'requestConstant/CHANGE_PROPS',
    FETCH_REQUEST: 'requestConstant/FETCH_REQUEST',
    FETCH_ERROR: 'requestConstant/FETCH_ERROR',
}

//mapping 
export const leaveRequestFormJSONToPropsMap = (mappingField = null,reverse = false) => {
    
    const mapFields = {
        docType : "doc_type",
        employeeNo: "form.employee.employee_no",
        fullName: "form.employee.full_name",
        leaveStart: "mappingField.form.leave_start",
        leaveEnd: "mappingField.form.leave_end",
        noOfDays: "mappingField.form.no_of_days",

    }

    if(!reverse) {
        return {
            docType:  mappingField.doc_type  ,
            employeeNo: mappingField.form.employee.employee_no,
            fullName: mappingField.form.employee.full_name,
            leaveStart: mappingField.form.leave_start,
            leaveEnd: mappingField.form.leave_end,
            noOfDays: mappingField.form.no_of_days,
            purpose: mappingField.form.purpose,
            countryOfDestination: mappingField.form.country_of_destination,
            personToContact: mappingField.form.person_to_contact,
            personContactNo: mappingField.form.person_contact_no,
            placeToStay: mappingField.form.place_to_stay,
            travelDate: mappingField.form.travel_date,
            joinedDate: mappingField.form.joined_date
        }
    }
    else {
        return {
            doc_type : mappingField.docType,
            form: {
                leave_start: mappingField.leaveStart,
                employee_no: mappingField.employeeNo,
                no_of_days: mappingField.noOfDays,
                purpose: mappingField.purpose,
                travel_date: mappingField.travelDate,
                country_of_destination: mappingField.countryOfDestination,
                person_to_contact: mappingField.personToContact,
                person_contact_no: mappingField.personContactNo,
                place_to_stay: mappingField.placeToStay,
                resources: "portal"
            }
        }
    }
    
}