export default function signReducer(state = {
    loginState: 1, //登录状态， 0 表示未登录， 1表示登录成功 2表示登录失败
}, action) {
    switch (action.type) {
        case 'LOGIN_START':
            return Object.assign({}, state, {
                loginState: action.payload.state
            })
    }
    return state;
}