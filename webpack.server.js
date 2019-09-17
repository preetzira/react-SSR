const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpackNodeExternals = require('webpack-node-externals')

const config = {
    //inform webpack that it will work for nodejs
    target:"node",

    //this is the root file of the server
    entry:"./src/index.js",


    // where to create the output file
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'build')
    },

    externals: [webpackNodeExternals()]
}
module.exports = merge(baseConfig, config)