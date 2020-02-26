const path = require('path');
const nodeExternals = require('webpack-node-externals');
const mmerge = require("webpack-merge");
const baseConfig = require('./webpack.base.js');

const config = {

  //Tell webpack the root file of our 
  //client application
  entry: './src/client/index.js',

  //Tell webpack where to put the output file
  //that is generated
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'cliendBundle.js'
  },


  externals: [nodeExternals()],

}

module.exports = mmerge(baseConfig, config);