<<<<<<< HEAD
import {SET_CURRENT_SESSION, GET_ROSTERS} from '../actions/actiontypes';
=======
import {SET_CURRENT_SESSION, SET_ROSTERS} from '../actions/actiontypes';
>>>>>>> 0fe259661d5ed4934647c76e754da14a7e3c2b8e

export default function sessionReducer(state = {
    current: null, 
    rosters: []
}, action) {
    switch (action.type) {
        case SET_CURRENT_SESSION:
            return Object.assign({}, state, {
                current: action.payload.session
            });

<<<<<<< HEAD
        case GET_ROSTERS:
=======
        case SET_ROSTERS:
>>>>>>> 0fe259661d5ed4934647c76e754da14a7e3c2b8e
            return Object.assign({}, state, {
                rosters: [...action.payload.rosters]
            });
        default:
            return state;
    }
    return state;
}