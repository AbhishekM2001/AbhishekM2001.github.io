import React from 'react'
import ReactDOM from 'react-dom'
// import createBrowserHistory from "history/createBrowserHistory";
const createBrowserHistory = require('history').createBrowserHistory
// import { HashRouter } from 'react-router-dom';
import { Router, Switch, Route } from 'react-router-dom'
import App from './Components/app'
import Jokes from './Components/Jokes'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'

const history = createBrowserHistory()
ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/jokes' component={Jokes} />
            </Switch>
        </Router>
    </React.StrictMode>, document.querySelector('#root'))