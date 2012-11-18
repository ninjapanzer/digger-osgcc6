var gamejs = require('gamejs');
var globals = require('./globals');
var draw = require('gamejs/draw');

var HUD = exports.HUD = function(){
   this.rect = new gamejs.Rect([0,0], [globals.screenDim[1],50]);
   this.color = '#000000'
   this.draw = function(surface){
      draw.rect(surface, this.color, this.rect, 0);
   };
   this.update = function(player){
   	
   }
   return this;
};