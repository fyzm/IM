import React, { Component } from 'react';

import {connect} from 'react-redux';
import Avator from '@component/common/avator';
import {sendTextMessage} from '@data/actions/message';
import classnames from 'classnames';
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
        if (!currentSession) {
            return [];
        }
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
                    <div className="ctn-msglist-inner">
                    {msgs.map((msg) => {
                        return <BubbleItem key={msg.id} msg = {msg} />
                    })}
                    </div>
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


    render() {
        let {msg} = this.props;
        let fromMe = true; //true 表示我发出去， to 表示我收到的
        
        let messageItemClassName = classnames({
            'message-item': true,
            'you': !fromMe,
            'me': fromMe
        });
        return (
            <div className={messageItemClassName}>
                {!fromMe ? <div className="avator-outer">
                    <Avator />
                </div> : null}
                <div className="message-item-inner">
                    <div className="name">
                        {fromMe ? msg.from : msg.to}
                    </div>
                    <div className="message-text">
                        {msg.value}
                    </div>
                </div>

                {fromMe ? <div className="avator-outer">
                    <Avator />
                </div> : null}
            </div>
        )
    }
    
}


