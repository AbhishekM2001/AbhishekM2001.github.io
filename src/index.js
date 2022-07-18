import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from "history/createBrowserHistory";

import { Router, Switch, Route } from 'react-router-dom'
import App from './Components/app'
import Jokes from './Components/Jokes'
import './index.css'

const history = createBrowserHistory()
ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact={true} path='/' component={App} />
            <Route path='/jokes' component={Jokes} />
        </Switch>
    </Router>, document.querySelector('#root'))