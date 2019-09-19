// Entry poiny for client
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Router from './Routes'
import reducer from './reducers'
// import { history } from 'history/createBrowserHistory'

const store = createStore(reducer,{},applyMiddleware(thunk))

const Routes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.hydrate(<Routes />,document.querySelector('#root'))