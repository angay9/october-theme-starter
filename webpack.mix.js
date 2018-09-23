let mix = require('laravel-mix');
// let ImageminPlugin = require( 'imagemin-webpack-plugin' ).default;
const webpack = require('webpack');
const Path = require('path');

mix.setPublicPath('assets/compiled/');
mix.setResourceRoot('assets/src');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.webpackConfig({
    module: {
        rules: [{
            test: /\.scss$/,
            loader: 'import-glob-loader'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
        }),
        //     new ImageminPlugin( {
        //         // disable: process.env.NODE_ENV !== 'production', // Disable during development
        //         pngquant: {
        //             quality: '85',
        //         },
        //         test: /images\/\.(jpe?g|png|gif|svg)$/i,
        //     } ),
    ],
    resolve: {
        alias: {
            "TweenLite": Path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
            "TweenMax": Path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
            "TimelineLite": Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
            "TimelineMax": Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
            // "luminous-lightbox": Path.resolve("node_modules", "luminous-lightbox/dist/luminous.min.js")
            // "ScrollMagic": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
            // "animation.gsap": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
            // "debug.addIndicators": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
        }
    }
});

mix.js('assets/src/js/start.js', 'assets/compiled/js')
    .sass('assets/src/scss/app.scss', 'assets/compiled/css')
    .options({
        processCssUrls: false
    })
;


