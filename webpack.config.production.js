/**
 * Created by wmj on 2016/1/30.
 */

var es6Shim = require('es6-shim');
var webpackBaseConfig = require('./webpack.config.base.js');
var webpack = require('webpack');
var webpackProductConfig = Object.create(webpackBaseConfig);
var path=require('path');
webpackProductConfig.output = Object.assign({}, webpackBaseConfig.output, {
    path: path.join(__dirname, 'public/assets/build/js/[hash]/chunks'),
    filename: '[name].js',
    chunkFilename: '[chunkHash].js',//异步加载的文件都会被放到chunk,“chunks” which are loaded on demand.
    publicPath: 'http://assets.dev.com/js/[hash]/chunks',//指定发布路径，也就是说异步加载的文件都会以这个路径为基础请求,可使用webpack-dev-server --content-base dist/js 指定到发布目录
});

webpackProductConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
        mangle: {
            except: ['$super', '$', 'exports', 'require']
        }, compress: {
            warnings: false
        }
    }
));



module.exports = webpackProductConfig;

