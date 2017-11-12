import React, { Component } from 'react';

import {connect} from 'react-redux';
import {sendTextMessage} from '@data/actions/message';
import './index.css';

@connect(
    (state) => ({
        currentSession: state.session.current,
        msglist: state.message.msglist
    }),
    {
        sendTextMessage
    }
)
export default class BubblePanel extends Component {
    sendTextMessage = () => {
        let {sendTextMessage, currentSession, chatType} = this.props;
        sendTextMessage(currentSession.name, this.refs.msginput.value, chatType);
        this.refs.msginput.value = '';
    }

    getMsgs =  () => {
        let {msglist, currentSession} = this.props;
        return msglist[currentSession.name] || [];
    }
    render() {
        let {currentSession} = this.props;
        let msgs = this.getMsgs();
        return (
            <div className="ctn-bubblepanel">
                <div className="title">
                    {currentSession ? currentSession.name : ''}
                </div>
                <div className="ctn-msglist">
                    {msgs.map((msg) => {
                        return <div key={msg.id}>{msg.value}</div>
                    })}
                </div>
                <div className="ctn-msg-sender">
                        <textarea 
                            ref="msginput"
                            placeholder="输入消息"

                        
                        />
                        <button className="button" onClick = {this.sendTextMessage}>发送</button>
                </div>
            </div>
        );
    }
}

class BubbleItem extends Component{
    
}


