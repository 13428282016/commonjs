webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("/**\r\n * Created by wmj on 2016/2/24.\r\n */\r\n\r\nvar inherit=__webpack_require__(1);\r\n\r\nvar Player=inherit({\r\n   __constructor:function(){\r\n\r\n       console.log('a Player Object has been created!');\r\n       this.__self.objNums++;\r\n   },\r\n    play:function(){\r\n        console.log('start play!');\r\n\r\n    },\r\n    pause:function(){\r\n       console.log('pause play!');\r\n    },\r\n    stop:function(){\r\n        console.log('stop play!');\r\n    },\r\n    resume:function(){\r\n        console.log('resume play!');\r\n    }\r\n},{\r\n   objNums:0,\r\n    getObjNums:function(){\r\n        return this.objNums;\r\n    }\r\n});\r\n\r\nmodule.exports=Player;\r\n\r\n\r\n\r\n//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYnJhcnkvcGxheWVyLmpzPzdmMzUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgd21qIG9uIDIwMTYvMi8yNC5cclxuICovXHJcblxyXG52YXIgaW5oZXJpdD1yZXF1aXJlKCdpbmhlcml0Jyk7XHJcblxyXG52YXIgUGxheWVyPWluaGVyaXQoe1xyXG4gICBfX2NvbnN0cnVjdG9yOmZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgY29uc29sZS5sb2coJ2EgUGxheWVyIE9iamVjdCBoYXMgYmVlbiBjcmVhdGVkIScpO1xyXG4gICAgICAgdGhpcy5fX3NlbGYub2JqTnVtcysrO1xyXG4gICB9LFxyXG4gICAgcGxheTpmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydCBwbGF5IScpO1xyXG5cclxuICAgIH0sXHJcbiAgICBwYXVzZTpmdW5jdGlvbigpe1xyXG4gICAgICAgY29uc29sZS5sb2coJ3BhdXNlIHBsYXkhJyk7XHJcbiAgICB9LFxyXG4gICAgc3RvcDpmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdG9wIHBsYXkhJyk7XHJcbiAgICB9LFxyXG4gICAgcmVzdW1lOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VtZSBwbGF5IScpO1xyXG4gICAgfVxyXG59LHtcclxuICAgb2JqTnVtczowLFxyXG4gICAgZ2V0T2JqTnVtczpmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9iak51bXM7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHM9UGxheWVyO1xyXG5cclxuXHJcblxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbGlicmFyeS9wbGF5ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDNcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("/**\r\n * Created by wmj on 2016/2/24.\r\n */\r\n\r\nvar $=__webpack_require__(2);\r\n\r\nvar Player=__webpack_require__(4);\r\n__webpack_require__.e/* nsure */(2, function(){\r\n\r\n\r\n});\r\nwindow['G_CORE']=\"G_Cdd77dd57ffffdsdsdffrwerwerf4324324324ffdO545RE\";\r\n//var H5Player=require('library/h5_player');\r\nvar FlashPlayer=__webpack_require__(7);\r\nvar player= new Player();\r\nplayer.play();\r\nconsole.log(Player.getObjNums());\r\n\r\n//var h5Player= new H5Player();\r\n//h5Player.play();\r\n//console.log(H5Player.getObjNums());\r\n\r\n\r\nvar flashPlayer= new FlashPlayer();\r\nflashPlayer.play();\r\nconsole.log(FlashPlayer.getObjNums());\r\n\r\nvar G_CORE=__webpack_require__(10);\r\nconsole.log(G_CORE);//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9wbGF5X3BhZ2UvcGxheWVyLmpzPzM4YmYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgd21qIG9uIDIwMTYvMi8yNC5cclxuICovXHJcblxyXG52YXIgJD1yZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbnZhciBQbGF5ZXI9cmVxdWlyZSgnbGlicmFyeS9wbGF5ZXInKTtcclxucmVxdWlyZS5lbnN1cmUoWydsaWJyYXJ5L2g1X3BsYXllciddLGZ1bmN0aW9uKCl7XHJcblxyXG5cclxufSk7XHJcbndpbmRvd1snR19DT1JFJ109XCJHX0NkZDc3ZGQ1N2ZmZmZkc2RzZGZmcndlcndlcmY0MzI0MzI0MzI0ZmZkTzU0NVJFXCI7XHJcbi8vdmFyIEg1UGxheWVyPXJlcXVpcmUoJ2xpYnJhcnkvaDVfcGxheWVyJyk7XHJcbnZhciBGbGFzaFBsYXllcj1yZXF1aXJlKCdsaWJyYXJ5L2ZsYXNoX3BsYXllcicpO1xyXG52YXIgcGxheWVyPSBuZXcgUGxheWVyKCk7XHJcbnBsYXllci5wbGF5KCk7XHJcbmNvbnNvbGUubG9nKFBsYXllci5nZXRPYmpOdW1zKCkpO1xyXG5cclxuLy92YXIgaDVQbGF5ZXI9IG5ldyBINVBsYXllcigpO1xyXG4vL2g1UGxheWVyLnBsYXkoKTtcclxuLy9jb25zb2xlLmxvZyhINVBsYXllci5nZXRPYmpOdW1zKCkpO1xyXG5cclxuXHJcbnZhciBmbGFzaFBsYXllcj0gbmV3IEZsYXNoUGxheWVyKCk7XHJcbmZsYXNoUGxheWVyLnBsYXkoKTtcclxuY29uc29sZS5sb2coRmxhc2hQbGF5ZXIuZ2V0T2JqTnVtcygpKTtcclxuXHJcbnZhciBHX0NPUkU9cmVxdWlyZSgnZ2xvYmFsL2NvcmUnKTtcclxuY29uc29sZS5sb2coR19DT1JFKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL3BsYXlfcGFnZS9wbGF5ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDNcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("/**\r\n * Created by wmj on 2016/2/24.\r\n */\r\n\r\nvar inherit=__webpack_require__(1);\r\nvar Player=__webpack_require__(4);\r\nvar FlashPlayer=inherit(Player,{\r\n\r\n    __constructor:function(){\r\n\r\n        this.__base();\r\n        console.log('a FlashPlayer Object has been created!');\r\n    },\r\n    play:function(){\r\n        this.__base();\r\n        console.log('a FlashPlayer start play!');\r\n\r\n    },\r\n    pause:function(){\r\n        this.__base();\r\n        console.log('a FlashPlayer pause play!');\r\n    },\r\n    stop:function(){\r\n        this.__base();\r\n        console.log('a FlashPlayer stop play!');\r\n    },\r\n    resume:function(){\r\n        this.__base();\r\n        console.log('a FlashPlayer resume play!');\r\n    }\r\n\r\n\r\n},{\r\n\r\n    getObjNums:function(){\r\n\r\n\r\n        return this.__base();\r\n    }\r\n});\r\n\r\nmodule.exports=FlashPlayer;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYnJhcnkvZmxhc2hfcGxheWVyLmpzPzZhMTkiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgd21qIG9uIDIwMTYvMi8yNC5cclxuICovXHJcblxyXG52YXIgaW5oZXJpdD1yZXF1aXJlKCdpbmhlcml0Jyk7XHJcbnZhciBQbGF5ZXI9cmVxdWlyZSgnbGlicmFyeS9wbGF5ZXInKTtcclxudmFyIEZsYXNoUGxheWVyPWluaGVyaXQoUGxheWVyLHtcclxuXHJcbiAgICBfX2NvbnN0cnVjdG9yOmZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHRoaXMuX19iYXNlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2EgRmxhc2hQbGF5ZXIgT2JqZWN0IGhhcyBiZWVuIGNyZWF0ZWQhJyk7XHJcbiAgICB9LFxyXG4gICAgcGxheTpmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuX19iYXNlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2EgRmxhc2hQbGF5ZXIgc3RhcnQgcGxheSEnKTtcclxuXHJcbiAgICB9LFxyXG4gICAgcGF1c2U6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLl9fYmFzZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhIEZsYXNoUGxheWVyIHBhdXNlIHBsYXkhJyk7XHJcbiAgICB9LFxyXG4gICAgc3RvcDpmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuX19iYXNlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2EgRmxhc2hQbGF5ZXIgc3RvcCBwbGF5IScpO1xyXG4gICAgfSxcclxuICAgIHJlc3VtZTpmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuX19iYXNlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2EgRmxhc2hQbGF5ZXIgcmVzdW1lIHBsYXkhJyk7XHJcbiAgICB9XHJcblxyXG5cclxufSx7XHJcblxyXG4gICAgZ2V0T2JqTnVtczpmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19iYXNlKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHM9Rmxhc2hQbGF5ZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYnJhcnkvZmxhc2hfcGxheWVyLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAzXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	eval("module.exports = G_CORE;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJHX0NPUkVcIj8xMjUwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gR19DT1JFO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJHX0NPUkVcIlxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDNcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }
]);