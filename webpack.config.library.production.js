/**
 * Created by wmj on 2016/2/24.
 */
/**
 * Created by wmj on 2016/1/30.
 */

var es6Shim=require('es6-shim');
var webpackBaseConfig=require('./webpack.config.library.js');
var webpackProductConfig=Object.create(webpackBaseConfig);

webpackProductConfig.output= Object.assign({},webpackBaseConfig.output,{
    filename: '[name].js',
    library:'[name]',
    libraryTarget:'umd',

});




module.exports=webpackProductConfig;

