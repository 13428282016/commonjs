/**
 * Created by wmj on 2016/1/30.
 */

/**
 * Created by wmj on 2016/1/30.
 */
var path = require('path')
var webpack = require('webpack')

module.exports = {
    context:path.join(__dirname,'public/assets/src/js'),
    //devtool:'cheap-module-eval-source-map',//可以在浏览器查看未合并的源代码

    entry: {
        base: ['jquery','inherit'],
        play_page_player:['./app/play_page/player'],
        play_page_statistics:['./app/play_page/statistics']
    },
    output: {


    },
    resolve: {
        root:path.join(__dirname),
        extensions: ['','.js'],
        alias:{

            library:'public/assets/src/js/library',

        }

    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'play_page_common',chunks:['play_page_player','play_page_statistics']}),//优化commonjs 如果同一个页面不同js 同时require（包括amd和commojs）相同的模块，那么被requried的模块就会合并到common.js中，避免重复执行和加载改模块
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),//所有模块都会引入jquery 即 访问$,jQuery,window.jQuery,会被编译成require('jquery');
        new webpack.optimize.OccurenceOrderPlugin(),//使output中生成的hash有序（每次编译对应一个hash）
        function(){
            this.plugin("done", function(stats) {
                require("fs").writeFileSync(
                    path.join(__dirname, "webpack.stats.json"),
                    JSON.stringify(stats.toJson()));
            });
        }
    ],
    externals:[
        {
            'global/core':'var G_CORE',


        }
    ],
    module: {


    }
}



