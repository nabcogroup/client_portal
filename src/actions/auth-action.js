import { loginConstant } from './type';
import api from '../utils/api';
import {storage} from '../utils/storage';


const verifyToken = () => (dispatch) => {
	let isTokenExist = storage.webToken.tokenExist()
	if(isTokenExist) {
		dispatch({type: loginConstant.TOKEN_EXIST,payload: true});
	}
}


const authenticate = (loginData) => (dispatch) => {
    
	const url = "/api/login";

	//verify token
	const token = verifyToken();
	
	if(verifyToken()) {
		api.fetchPost(url,loginData)
			.then(result => {
					//store the token
					storage.webToken.setToken(result.data.access_token);
					dispatch({type: loginConstant.SUCCESS, payload: null})
			})
			.catch(error => {
					dispatch({type: loginConstant.ERROR,payload: error.response.data.message})
			});
	}
	else {
		
	}
}


export const authAction = {
	authenticate,
	verifyToken
}


