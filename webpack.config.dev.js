
var es6Shim=require('es6-shim');
var webpackBaseConfig=require('./webpack.config.base.js');
var webpackDevConfig=Object.create(webpackBaseConfig);

var path=require('path');
webpackDevConfig.output= Object.assign({},webpackBaseConfig.output,{
    path: path.join(__dirname, 'public/assets/build/js/dev/chunks'),
    filename: '[name].js',
    chunkFilename: '[chunkHash].js',//异步加载的文件都会被放到chunk,“chunks” which are loaded on demand.
    publicPath: 'http://assets.dev.com/js/dev/chunks/',//指定发布路径，也就是说异步加载的文件都会以这个路径为基础请求,可使用webpack-dev-server --content-base dist/js 指定到发布目录

});
webpackBaseConfig.devtool='cheap-module-eval-source-map'//可以在浏览器查看未合并的源代码


module.exports=webpackDevConfig;

