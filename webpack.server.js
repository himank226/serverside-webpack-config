const path = require('path');
const nodeExternals = require('webpack-node-externals');
const mmerge = require("webpack-merge");
const baseConfig = require('./webpack.base.js');

const config = {
  //Inform webpack that we're building a bundle
  //for nodejs, rather than for the browser
  target: 'node',

  //Tell webpack the root file of our 
  //server application
  entry: './src/server/index.js',


  //Tell webpack where to put the output file
  //that is generated
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'serverBundle.js'
  },

  externals: [nodeExternals()],
}

module.exports = mmerge(baseConfig, config);

