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
<<<<<<< HEAD
    state = {
        hasError: false
=======

    componentDidUpdate () {
        
        this.refs.list.scrollTop = this.refs.inner.offsetHeight;
>>>>>>> 0fe259661d5ed4934647c76e754da14a7e3c2b8e
    }
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
        if (this.state.hasError) {
            return <div>error</div>
        }
        return (
            <div className="ctn-bubblepanel">
                <div className="title">
                    {currentSession ? currentSession.name : ''}
                </div>
                <div className="ctn-msglist" ref = "list">
                    <div className="ctn-msglist-inner" ref="inner">
                    {msgs.map((msg) => {
                        return <BubbleItemWithErrorWrapper key={msg.id} msg = {msg} />
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

<<<<<<< HEAD
class BubbleItemWithErrorWrapper extends Component{
    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
      }
    
      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return <h1>Something went wrong.</h1>;
        }
        return <BubbleItem msg = {this.props.msg} />;
      }
}

=======

class BubbleItemWithErrorWrapper extends Component{
    state = {
        hasError: false
    }
    componentDidCatch (error, info){
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, info);
        console.error(error, info);
    }

    render() {
        if (this.state.hasError) {
            return <div>出错了，请联系RD修复</div>
        }
        return <BubbleItem msg = {this.props.msg} />
    }
}
>>>>>>> 0fe259661d5ed4934647c76e754da14a7e3c2b8e
class BubbleItem extends Component{

    componentWillMount() {
        //setTimeout(() => {
            //throw new Error('error');
        //}, 0)

        //throw new Error('error');
    }

    render() {
        let {msg} = this.props;
        let fromMe = msg.fromMe; //true 表示我发出去， to 表示我收到的
        
        //throw Error('error');
        let messageItemClassName = classnames({
            'message-item': true,
            'you': !fromMe,
            'me': fromMe
        });

         
        return (
<<<<<<< HEAD
            [<div className={messageItemClassName}>
=======
            <div className={messageItemClassName}>
>>>>>>> 0fe259661d5ed4934647c76e754da14a7e3c2b8e
                <div className="message-item-outer">
                    {!fromMe ? <div className="avator-outer">
                        <Avator />
                    </div> : null}
                    <div className="message-item-inner">
                        <div className="name">
                            {fromMe ? msg.from : msg.to}
                        </div>
                        <div className="message-text">
<<<<<<< HEAD
                            {msg.value || msg.data}
=======
                            {msg.value}
>>>>>>> 0fe259661d5ed4934647c76e754da14a7e3c2b8e
                        </div>
                    </div>

                    {fromMe ? <div className="avator-outer">
                        <Avator />
                    </div> : null}
                </div>
<<<<<<< HEAD
                
            </div>,
            ]
=======
            </div>
           
>>>>>>> 0fe259661d5ed4934647c76e754da14a7e3c2b8e
        )
    }
    
}


