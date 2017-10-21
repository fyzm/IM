/**
 * Created by mengqinghui 
 * 构造redux
 */

'use strict';

import {compose, createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//import asyncMiddleware from '../lib/async-middleware'

import '../sdk/init';
//import appList from './reducer/app';


const _reducers = {
    
};

const reducers = combineReducers(_reducers);
/**
 * devtool
 */

//import {persistState} from 'redux-devtools';


//export default (/*, DevTool*/) => {
    //const reduxRouterMiddleware = syncHistory(history);
    let dev = true;
 
    let middlewares = [thunk];

    let finalCreateStore;
    if (dev) {
        finalCreateStore = compose(
            applyMiddleware(...middlewares)/*,
             devtools(),
            //DevTool.instrument(),
            //persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))*/
        )(createStore);
    } else {
        finalCreateStore = applyMiddleware(...middlewares)(createStore);
    }

    const store = finalCreateStore(reducers);

    //return store;
//}

export default store;

