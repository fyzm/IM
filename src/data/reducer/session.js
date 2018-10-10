import {SET_CURRENT_SESSION, GET_ROSTERS, SET_ROSTERS} from '../actions/actiontypes';

export default function sessionReducer(state = {
    current: null, 
    rosters: []
}, action) {
    switch (action.type) {
        case SET_CURRENT_SESSION:
            return Object.assign({}, state, {
                current: action.payload.session
            });

        case SET_ROSTERS:
            return Object.assign({}, state, {
                rosters: [...action.payload.rosters]
            });
        default:
            return state;
    }
    return state;
}