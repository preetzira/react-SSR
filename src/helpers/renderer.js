import React from 'react';
import { renderToString } from 'react-dom/server' 
import Router from '../client/Routes'
import { StaticRouter } from 'react-router-dom'

const Routes = (req) => {
    return (
        <StaticRouter location={req.path} context={{}}>
            <Router />
        </StaticRouter>
    )
}

export default () => {
    const content = renderToString(<Routes />)
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