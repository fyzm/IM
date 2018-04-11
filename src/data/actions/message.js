import {GET_MSGS, SEND_TEXT_MSG, CHANGE_MSG_STATUS, createAction } from './actiontypes';
import {getToken} from '@util/token';
import {getRosters, changeRosterWithMsg} from './session';


<<<<<<< HEAD
import {getRosters} from './session';
export let addTextMessage = createAction(SEND_TEXT_MSG, 'to', 'msg');

export function init() {
    return (dispatch, getState) => {
=======
import eventEmitter from '@util/event';
export let addTextMessage = createAction(SEND_TEXT_MSG, 'to', 'msg');

function addTextMessageWithRosterChange(to, msg) {
    return (dispatch) => {
        dispatch(addTextMessage(to, msg));
        dispatch(changeRosterWithMsg(msg));

    }
}

export function init() {
    return (dispatch) => {
>>>>>>> 0fe259661d5ed4934647c76e754da14a7e3c2b8e
        sdk.conn.listen({
            onOpened: (message) =>  {
                dispatch(getRosters());
            },
<<<<<<< HEAD
            onRoster: () => {
                dispatch(getRosters());
                
            },
            onTextMessage: (message) => {
                dispatch(addTextMessage(message.from, message));
            },
            onPresence: (message) => {
                //this.handlePresence(message);
            }
        });
    };
    
}

// init();

=======
            onTextMessage: (message) => {
                message.value = message.value || message.data;
                dispatch(addTextMessageWithRosterChange(message.from, message));
            },
            onRoster: () => {
                dispatch(getRosters());
            },
            onPresence: (message) => {
                //this.handlePresence(message);
                eventEmitter.emit('presence', message)
            }
        });
    }
    
}

>>>>>>> 0fe259661d5ed4934647c76e754da14a7e3c2b8e
export function sendTextMessage(to, text, chatType) {
    return (dispatch, getState) => {
        let id = sdk.conn.getUniqueId();             // 生成本地消息id
        let msg = new WebIM.message('txt', id);      // 创建文本消息
        msg.set({
            msg: text,            // 消息内容
            to: to,                 // 接收消息对象（用户id）
            roomType: false,
            success: function (id, serverMsgId) {
                msg.fromMe = true;
                msg.from = getToken().user.username;
                
                dispatch(addTextMessageWithRosterChange(to, msg));
            },
            fail: function(e){
                //console.log("Send private text error");
            }
        });
        msg.body.chatType = chatType;
        sdk.conn.send(msg.body);
    }
}

/**
 * 获取to的聊天消息
 * @param {*} to 
 */
export function getMsgs(to) {

}

/**
 * 改变消息的状态
 * 比如，对方看到后显示已经看过，没看下方显示消息未读
 */
export function changeMessageStatus(mid) {
    //

}

