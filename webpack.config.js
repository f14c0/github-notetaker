module.exports = {
    //entry ponit to processing JSX
    entry: "./app/App.js",
    output:{
      filename: "public/bundle.js",//where to put transcoded file
    },
    // Tell webpack what  actually do with th jsx code
    module:
    {
      loaders:
      [
        {
          test:/\.jsx?$/,
          exclude:/(node_modules|bower_components)/,
          loader:'babel',
          query:
            {
              //what transformations do
              //react jsx transformations, es2015 transformations
              //Don forget to install presets
              //more info https://babeljs.io/blog/2015/10/31/setting-up-babel-6/
              presets:['react','es2015']
            }
        },
        //Font Awesome
        {
          test: /\.css$/,
          loader: 'style!css?sourceMap'
        }, {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/font-woff"
        }, {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/font-woff"
        }, {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/octet-stream"
        }, {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: "file"
        }, {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=image/svg+xml"
        }
      ]
    }
};
