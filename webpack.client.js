const path = require('path')

module.exports = {

    //this is the root file of the server
    entry:"./src/client/client.js",


    // where to create the output file
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'public')
    },

    //make webpack use babel to transpile
    module:{
        rules:[
            {
                test:/.js$/,
                loader:'babel-loader',
                exclude : /node_modules/,
                options:{
                    presets:[
                        'react',
                        'stage-0',
                        ['env',{ targets : { browsers : ['last 2 versions'] }}]
                    ]
                }
            }
        ]
    }
}