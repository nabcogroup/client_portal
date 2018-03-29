import api from './../utils/api';
import {requestConstant, leaveRequestFormJSONToPropsMap} from "./type";

const fetchAllRequest = () => (dispatch) => {
    
    const url = "/api/request";
    
    api.secureFetch(url).then((result) => {
        dispatch({type:requestConstant.FETCH_ALL,payload:result.data});
    })
    .catch((error) => {
        dispatch({type:requestConstant.FETCH_ERROR,payload:error.response.data});
    });


}


const createNewRequest = () => (dispatch) => {

    const url = "/api/request/create";

    api.secureFetch(url).then((result) => {
        dispatch({type:requestConstant.CREATE_NEW,payload:result.data.data});
    })
    .catch((error) => {
        console.log(error);
        //dispatch({type:requestConstant.FETCH_ERROR,payload:error.response.data});
    });

}

const saveRequest = (formData) => (dispatch) => {

    const url = "/api/request/store"
    const requestData = leaveRequestFormJSONToPropsMap(formData,true);
    api.secureFetchPos(url,requestData).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error.response);
    })
}



export const requestAction = {
    fetchAllRequest,
    createNewRequest,
    saveRequest
    
}