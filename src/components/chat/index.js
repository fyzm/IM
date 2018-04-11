import React, { Component } from 'react';

import SlideBar from './slidebar';
import SessionList from './sessionlist';
import BubblePanel from './bubblepanel';
import {connect} from 'react-redux';
<<<<<<< HEAD
import {init} from '@data/actions/message';
=======
>>>>>>> 0fe259661d5ed4934647c76e754da14a7e3c2b8e


import {init} from '@data/actions/message';
import './index.css';

<<<<<<< HEAD
@connect(
    (state) => ({
    }),
    {
        init
    }
)
export default class Chat extends Component {

    componentWillMount() {
        this.props.init();
    }
=======
@connect(() => ({

}), {
    init
})
export default class Chat extends Component {
>>>>>>> 0fe259661d5ed4934647c76e754da14a7e3c2b8e


    componentWillMount() {
        this.props.init();
    }
    render() {
        let {params} = this.props;
        return (
            <div className="ctn-chat">
                <div>
                    <SlideBar />
                    <SessionList chatType = {params.chatType} chatId = {params.chatId}/>

                    {params.chatId ? <BubblePanel chatType = {params.chatType} chatId = {params.chatId}/> : null}
                    
                </div>
                
            </div>
        );
    }
}


