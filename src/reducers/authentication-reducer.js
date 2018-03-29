import {loginConstant} from '../actions/type';

const initialState = {
    email:'',
    password: '',
    message: '',
    isOk: false,
}

export default function(state = initialState,action) {
    switch(action.type) {
        case loginConstant.SUCCESS: {
            return {
                ...state,
                isOk: true,
                
            }
        }
        case loginConstant.TOKEN_EXIST: {
            return {
                ...state,
                isOk: true,
            }
        }
        case loginConstant.ERROR:
            return {
                ...state,
                message: action.payload,
                isOk: false
            }
        default:
            return state;
    }
}