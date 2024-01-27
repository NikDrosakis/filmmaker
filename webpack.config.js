const webpack = require('webpack');

// ... other webpack configuration

module.exports = {
    // ... other webpack configuration

    plugins: [
        // ... other plugins
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],

    // ... other webpack configuration
};