var gamejs = require('gamejs');
var globals = require('./globals');
var draw = require('gamejs/draw');
var font = require('gamejs/font');

var HUD = exports.HUD = function(){
   this.rect = new gamejs.Rect([0,0], [globals.screenDim[1],50]);
   this.color = '#000000'
   this.draw = function(surface){
      draw.rect(surface, this.color, this.rect, 0);
   };
   this.update = function(player, display){
   	var position = [100,25];
   	player.inventory.forEach(function(item){
   		item.rect.x = position[0];
   		item.rect.y = position[1];
   		item.draw(display);
   		var font = new gamejs.font.Font('20px monospace');
   		var helloSurface = font.render(item.count, '#ffffff');
   		var messageSize = helloSurface.getSize();
   		position[0] =  position[0] + 11;
   		display.blit(helloSurface, position);
   		position[0] = position[0] + 55;
   	});
   }
   return this;
};