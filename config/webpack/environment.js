const { environment } = require('@rails/webpacker');
const webpack         = require('webpack');
const sharedConfig    = require('./shared');

// Loaders
environment.loaders.append('expose',
  {
    rules: [
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        },{
          loader: 'expose-loader',
          options: '$'
        }]
      },
      {
        test: require.resolve('@rails/ujs'),
        use: [{
          loader: 'expose-loader',
          options: 'Rails'
        }]
      }
    ]
  }
);

// Plugins
environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
  $: 'jquery',
  JQuery: 'jquery',
  jquery: 'jquery',
  'window.Tether': 'tether',
  Popper: ['popper.js', 'default'], // for Bootstrap 4
}));

// Merge shared config
environment.config.merge(sharedConfig);

module.exports = environment;
