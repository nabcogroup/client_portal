import { requestConstant, leaveRequestFormJSONToPropsMap } from './../actions/type';

const initialState = {
    requests: [],
    request: {},
    errors: {}
}

export default  function(state = initialState,action) {
    switch(action.type) {
        case requestConstant.FETCH_ALL: 
        {
            return {
                ...state,
                requests: action.payload
            }
        }
        case requestConstant.CREATE_NEW:
        {
            const form = action.payload.form
            return {
                ...state,
                request: leaveRequestFormJSONToPropsMap(action.payload)
            }
        }
        case requestConstant.CHANGE_PROPS: {
            return {
                ...state,
                request: action.payload
            }
        }
        default: return state;
    }
}