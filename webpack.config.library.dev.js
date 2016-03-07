/**
 * Created by wmj on 2016/2/24.
 */

var es6Shim=require('es6-shim');
var webpackBaseConfig=require('./webpack.config.library.js');
var webpackDevConfig=Object.create(webpackBaseConfig);


webpackDevConfig.output= Object.assign({},webpackBaseConfig.output,{
    filename: '[name].js',
    library:'[name]',
    libraryTarget:'umd'

});



module.exports=webpackDevConfig;

