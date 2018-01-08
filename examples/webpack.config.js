const path = require('path');

module.exports = {
  entry: {'styled-components': './styled-components/example.js', js :'./js/example.js'}, // string | object | array
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    // options related to how webpack emits results

    // path: path.resolve(__dirname, 'dist'), // string
    path: __dirname, // string
    
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: '[name]/dist/example.js', // string
    // the filename template for entry chunks

    publicPath: './assets/', // string
    // the url to the output directory resolved relative to the HTML page

    libraryTarget: 'umd', // universal module definition
    // the type of the exported library

    /* Advanced output configuration (click to show) */
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          }
        }
      }
    ]
  },

  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    modules: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname)
    ],
    // directories where to look for modules

    extensions: ['.js', '.json', '.jsx', '.css'],
  },


  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory

  target: 'web', // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules

  // externals: ['react'],
  // Don't follow/bundle these modules, but request them at runtime from the environment

  stats: 'errors-only',
  // lets you precisely control what bundle information gets displayed

  plugins: [
  ],
}
