import {combineReducers} from 'redux';

import authenticationReducer from './authentication-reducer';
import leaveRequestReducer from './leave-request-reducer';
import {reducer as formReducer} from 'redux-form';


export default combineReducers({
    login: authenticationReducer,
    leaveRequest:leaveRequestReducer,
    form: formReducer
});

