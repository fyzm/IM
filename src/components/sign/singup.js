import React, { Component } from 'react';

export default class SignUp extends Component {
    
    keyDown = () => {

    }

    signup = () => {

    }
    render() {
        return (
            <div className={'webim-sign webim-signup'}>
                <h2>注册页面</h2>
                <input ref='name' placeholder='输入用户名' autoFocus={true} onInput={this.keyDown}/>
                <input ref='auth' placeholder='输入密码' type='password' onInput={this.keyDown}/>
            
                <button onClick={this.signup}>注册</button>
                <p>已有账户,
                    <i onClick={this.signin}>登录</i>
                </p>
            </div>
        );
        
    }
}