
import {storage} from "./storage";


const urlBase = "http://192.168.0.87:8082";

const axios = require('axios');

const secureFetchPos = (url,data) => {
        
    const localToken = storage.webToken.getToken();
    const header = {Authorization: `Bearer ${localToken}`,'Content-Type':'application/json','Access-Control-Allow-Credentials':'true'};

    //axios.default.headers.common['Authorization'] = `Bearer ${localToken}`;
    axios.default.crossDomain = true;
    return axios.post(urlBase + url,data,{headers:header});
}

const fetchPost = (url,data) => {

    return axios.post(urlBase + url,data);

}

const secureFetch = (url,data) => {
    
    const localToken = storage.webToken.getToken();
    const header = {Authorization: `Bearer ${localToken}`};

    //axios.default.headers.common['Authorization'] = `Bearer ${localToken}`;
    
    return axios.get(urlBase + url,{headers: header});
        
}


const api = {
    secureFetch,
    secureFetchPos,
    fetchPost
}

export default api;