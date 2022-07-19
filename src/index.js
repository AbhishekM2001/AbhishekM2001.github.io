import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from "history/createBrowserHistory";
import { HashRouter } from 'react-router-dom';
import { Router, Switch, Route } from 'react-router-dom'
import App from './Components/app'
import Jokes from './Components/Jokes'
import './index.css'

const history = createBrowserHistory()
ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/jokes' component={Jokes} />
            </Switch>
        </HashRouter>
    </React.StrictMode>, document.querySelector('#root'))