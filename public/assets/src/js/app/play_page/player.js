/**
 * Created by wmj on 2016/2/24.
 */

var $=require('jquery');

var Player=require('library/player');
require.ensure(['library/h5_player'],function(){


});
window['G_CORE']="G_Cdd77dd57ffffdsdsdffrwerwerf4324324324ffdO545RE";
//var H5Player=require('library/h5_player');
var FlashPlayer=require('library/flash_player');
var player= new Player();
player.play();
console.log(Player.getObjNums());

//var h5Player= new H5Player();
//h5Player.play();
//console.log(H5Player.getObjNums());


var flashPlayer= new FlashPlayer();
flashPlayer.play();
console.log(FlashPlayer.getObjNums());

var G_CORE=require('global/core');
console.log(G_CORE);