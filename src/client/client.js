// Entry poiny for client
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Router from './Routes'
// import { history } from 'history/createBrowserHistory'

const Routes = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    )
}

ReactDOM.hydrate(<Routes />,document.querySelector('#root'))