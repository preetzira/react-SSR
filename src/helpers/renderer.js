import React from 'react';
import { renderToString } from 'react-dom/server' 
import Router from '../client/Routes'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

const Routes = (props) => {
    return (
        <Provider store={props.store}>
            <StaticRouter location={props.url} context={{}}>
                <Router />
            </StaticRouter>
        </Provider>
    )
}

export default (url,store) => {
    const content = renderToString(<Routes url={url} store={store} />)
    const html = `
        <html>
            <head>
                <title>SSR</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `
    return html
}