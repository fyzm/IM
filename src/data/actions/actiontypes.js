export function createAction(type, ...actionArgs) {
    return (...args) => {
        let action = {type: type, payload: {}};
        actionArgs.forEach((arg, index) => {
            action.payload[actionArgs[index]] = args[index];
        });
        return action;
    }
}

<<<<<<< HEAD

//SESSION
=======
//sessions
>>>>>>> 0fe259661d5ed4934647c76e754da14a7e3c2b8e
export const REG_STATE_CHANGE = 'reg_state_change';

export const SET_CURRENT_SESSION = 'set_currrnet_session';
export const SET_ROSTERS = 'set_rosters';




export const GET_ROSTERS = 'get_rosters';


//MESSAGE
export const SEND_TEXT_MSG = 'send_text_msg';

export const GET_MSGS = 'get_msgs';


export const CHANGE_MSG_STATUS = 'change_msg_status';


