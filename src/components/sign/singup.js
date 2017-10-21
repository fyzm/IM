import React, { Component } from 'react';

import {connect} from 'react-redux';
import {login} from '../../data/actions/sign';
@connect(
    state => ({
        loginState: state.sign.loginState
    }),
    {
        login 
    }
  )
export default class SignUp extends Component {
    
    keyDown = () => {

    }

    signup = () => {
        
            if (this.submiting) {
                return false;
            }
            var username = this.refs.name.value;
            var pwd = this.refs.auth.value;
            var nickname = this.refs.nickname.value;
            if (!username || !pwd) {
                return false;
            }
    
            let {login} = this.props;
            login(2);
    
            // var options = {
            //     username: username.toLowerCase(),
            //     password: pwd,
            //     nickname: nickname,
            //     appKey: WebIM.config.appkey,
            //     apiUrl: WebIM.config.apiURL,
            //     success: function () {
                    
            //     },
            //     error: function (e) {
                    
            //     }
            // };
            // sdk.conn.registerUser(options);
    }
    render() {
        return (
            <div className={'webim-sign webim-signup'}>
                <h2>注册页面</h2>
                <input ref='name' name="name" placeholder='输入用户名' autoFocus={true} onInput={this.keyDown}/>
                <input ref='auth' name="auth" placeholder='输入密码' type='password' onInput={this.keyDown}/>
                <input ref="nickname" name="nickname" placeholder='输入昵称'  onInput={this.keyDown}/>

                <button onClick={this.signup}>注册</button>
                <p>已有账户,
                    <i onClick={this.signin}>登录 {this.props.loginState}</i>
                </p>
            </div>
        );
        
    }
}