import React from 'react'
import ReactDOM from 'react-dom'


import 'bootstrap/dist/css/bootstrap.css'
import './dist/css/app.css'

import registerServiceWorker from './registerServiceWorker'

import {Provider} from 'react-redux';
import {BrowserRoute,Route} from 'react-router-dom';
import store from './stores/store';

import App from './App'



const Root = () => {
    
    return (
        <Provider store={store}>
            <App/>
        </Provider>);
}


ReactDOM.render(Root(), document.getElementById('root'))
registerServiceWorker()
