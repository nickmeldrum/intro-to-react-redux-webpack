'use strict';

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './bin/app.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel" }
        ]
    }
};
