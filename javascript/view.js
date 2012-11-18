var gamejs = require('gamejs');
var globals = require('./globals');
var draw = require('gamejs/draw');
var font = require('gamejs/font');

var HUD = exports.HUD = function(){
   this.HUD = new gamejs.Rect([0,0], [globals.screenDim[0],50]);
   this.HUDBorder = new gamejs.Rect([0,0], [globals.screenDim[0],50]);
   this.color = '#000000'
   this.draw = function(surface){
      draw.rect(surface, this.color, this.HUD, 0);
      draw.rect(surface, '#fff000', this.HUDBorder, 4);
   };
   this.update = function(player, display){
   	var position = [20,30];
   	player.inventory.forEach(function(item){
   		item.rect.x = position[0];
   		item.rect.y = position[1];
   		item.draw(display);
   		var font = new gamejs.font.Font('20px monospace');
   		var resourceCountSurface = font.render(item.count, '#ffffff');
   		var headingSurface = font.render('Resources', '#fffffff');
   		var messageSize = resourceCountSurface.getSize();
   		display.blit(headingSurface, [10, 5]);
   		position[0] =  position[0] + 11;
   		display.blit(resourceCountSurface, position);
   		position[0] = position[0] + messageSize[0]+11;
   	});
   }
   return this;
};