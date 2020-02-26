

module.exports = {

    //Tell webpack to run babel on every file it run through
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node-modules/,
            }
        ]
    }
};
