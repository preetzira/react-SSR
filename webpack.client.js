const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {

    //this is the root file of the server
    entry:"./src/client/client.js",


    // where to create the output file
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'public')
    }
}

module.exports = merge(baseConfig, config)