/**
 * Created by wmj on 2016/2/25.
 */
var gulp = require('gulp');
var program=require('commander');
var connect=require('gulp-connect');
var uglify = require('gulp-uglify'),
    sourceMaps = require('gulp-sourcemaps');
require('es6-shim');
var webpack =require('webpack');
var path=require('path');



program.version('0.0.1')
    .option('-e,--entry <items>','entry files',function(val){
        return val.split(',');
    })
    .option('-p --port <n>','port',parseInt)
    .option('-h --host <n>','host')
    .parse(process.argv);

var webpackDevServer = require('webpack-dev-server');
gulp.task('server:web',['watch:html'],function(){
    connect.server({
        port:program.port,
        root:'www',
        host:program.host||'dev.com',
        livereload:true,
    });

});




gulp.task('watch:html',function(){

   return  gulp.watch(['www/**/*.html'],function(event){
        if(event.type==='changed'){

            gulp.src(event.path)
                .pipe(   connect.reload());

        }

    })
});



gulp.task('build:js:library',function(){

    return 


});



gulp.task('build:js',function(){

    var webpackProductionConfig = require('./webpack.config.production.js');

    webpack(webpackProductionConfig, function (err, stat) {

        if (err) {
            console.log(err);
            return;
        }

    });



});


gulp.task('server:assets:webpack',function(){

    var webpackProductionConfig = require('./webpack.config.production.js');
    var compiler=webpack(webpackProductionConfig);
    var server=new webpackDevServer(compiler,{
        contentBase:'./public/assets/src',
        publicPath:webpackProductionConfig.output.publicPath,
        noInfo:false,
        quiet:false,
        stats:{
            color:true
        },
        hot:true

    });
    server.listen(80,'assets.dev.com',function(err,result){

        if (err) {
            console.log(err);
        }
        console.log('Listening at assets.dev.com:80');

    });


});

gulp.task('watch:js:dev',function(){
    var webpackDevConfig = require('./webpack.config.dev.js');

    var compiler=webpack(webpackDevConfig);
    compiler.watch({
        aggregateTimeout:300,
        poll:true
    },function(err,stats){
        if (err) {
            console.log(err);
            return;
        }

    })


});


gulp.task('watch:js:production',function(){
    var webpackProductionConfig = require('./webpack.config.production.js');
    var compiler=webpack(webpackProductionConfig);
    compiler.watch({
        aggregateTimeout:300,
        poll:true
    },function(err,stats){
        if (err) {
            console.log(err);
            return;
        }

    })


});


gulp.task('server:assets:dev',function(){

    connect.server({
        port:program.port,
        root:'public/assets/src',
        host:program.host||'assets.dev.com',
        livereload:false,


    });

});

gulp.task('server:assets:production',function(){

    connect.server({
        port:program.port,
        root:'public/assets/build',
        host:program.host||'assets.dev.com',


    });

});


