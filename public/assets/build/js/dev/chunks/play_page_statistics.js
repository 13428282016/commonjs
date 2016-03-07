webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);


/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	eval("/**\r\n * Created by wmj on 2016/2/24.\r\n */\r\nvar $=__webpack_require__(2);\r\n\r\nvar Statistics=__webpack_require__(9);\r\n\r\nvar statistics= new Statistics();\r\n\r\nstatistics.vv();\r\nstatistics.pv()\r\nconsole.log(Statistics.getObjNums());//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9wbGF5X3BhZ2Uvc3RhdGlzdGljcy5qcz9hYmI4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHdtaiBvbiAyMDE2LzIvMjQuXHJcbiAqL1xyXG52YXIgJD1yZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbnZhciBTdGF0aXN0aWNzPXJlcXVpcmUoJ2xpYnJhcnkvc3RhdGlzdGljcycpO1xyXG5cclxudmFyIHN0YXRpc3RpY3M9IG5ldyBTdGF0aXN0aWNzKCk7XHJcblxyXG5zdGF0aXN0aWNzLnZ2KCk7XHJcbnN0YXRpc3RpY3MucHYoKVxyXG5jb25zb2xlLmxvZyhTdGF0aXN0aWNzLmdldE9iak51bXMoKSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9wbGF5X3BhZ2Uvc3RhdGlzdGljcy5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gNFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	eval("/**\r\n * Created by wmj on 2016/2/24.\r\n */\r\n\r\nvar inherit=__webpack_require__(1);\r\n\r\nvar Statistics=inherit({\r\n    __constructor:function(){\r\n\r\n        console.log('a Statistics Object has been created!');\r\n        this.__self.objNums++;\r\n    },\r\n    pv:function(){\r\n        console.log('trigger a pv  statistics!');\r\n\r\n    },\r\n    vv:function(){\r\n        console.log('trigger a vv statistics!');\r\n    },\r\n\r\n},{\r\n    objNums:0,\r\n    getObjNums:function(){\r\n        return this.objNums;\r\n    }\r\n});\r\n\r\nmodule.exports=Statistics;\r\n\r\n//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYnJhcnkvc3RhdGlzdGljcy5qcz9kMWM5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHdtaiBvbiAyMDE2LzIvMjQuXHJcbiAqL1xyXG5cclxudmFyIGluaGVyaXQ9cmVxdWlyZSgnaW5oZXJpdCcpO1xyXG5cclxudmFyIFN0YXRpc3RpY3M9aW5oZXJpdCh7XHJcbiAgICBfX2NvbnN0cnVjdG9yOmZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhIFN0YXRpc3RpY3MgT2JqZWN0IGhhcyBiZWVuIGNyZWF0ZWQhJyk7XHJcbiAgICAgICAgdGhpcy5fX3NlbGYub2JqTnVtcysrO1xyXG4gICAgfSxcclxuICAgIHB2OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RyaWdnZXIgYSBwdiAgc3RhdGlzdGljcyEnKTtcclxuXHJcbiAgICB9LFxyXG4gICAgdnY6ZnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zb2xlLmxvZygndHJpZ2dlciBhIHZ2IHN0YXRpc3RpY3MhJyk7XHJcbiAgICB9LFxyXG5cclxufSx7XHJcbiAgICBvYmpOdW1zOjAsXHJcbiAgICBnZXRPYmpOdW1zOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqTnVtcztcclxuICAgIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cz1TdGF0aXN0aWNzO1xyXG5cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYnJhcnkvc3RhdGlzdGljcy5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gNFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

});