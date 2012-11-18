var gamejs = require('gamejs');
var globals = require('./globals');
var draw = require('gamejs/draw');
var font = require('gamejs/font');
globals.imgArray().push('assets/images/player/bluepop.png');
globals.imgArray().push('assets/images/player/clearpop.png');
globals.imgArray().push('assets/images/player/coalpop.png');
globals.imgArray().push('assets/images/player/greenpop.png');
globals.imgArray().push('assets/images/player/redpop.png');
var HUD = exports.HUD = function(){
   this.HUD = new gamejs.Rect([0,0], [globals.screenDim[0],50]);
   this.HUDBorder = new gamejs.Rect([0,0], [globals.screenDim[0],50]);
   this.color = '#000000'
   this.draw = function(surface){
      draw.rect(surface, this.color, this.HUD, 0);
      draw.rect(surface, '#fff000', this.HUDBorder, 4);
   };
   this.update = function(player, display){
   	//Upper Start
   	var upperPosition = [10, 5];
   	//Lower Start
   	var position = [10,30];
   	var font = new gamejs.font.Font('20px monospace');

   	//Upper Level
   	var headingSurface = font.render('Resources', '#ffffff');
   	display.blit(headingSurface, [10, 5]);
   	var upgradeHeadingSurface = font.render('Upgrades', '#ffffff');
   	display.blit(upgradeHeadingSurface,[550,5])
   	var scoreHeadingSurface = font.render('Score', '#ffffff');
   	display.blit(scoreHeadingSurface, [globals.screenDim[0]-(scoreHeadingSurface.getSize()[0]+10),5]);

   	var scoreTotal = 0;
   	player.inventory.forEach(function(item){
   		item.rect.x = position[0];
   		item.rect.y = position[1];
   		item.draw(display);
   		//Lower Level
   		scoreTotal += item.count*item.value;
   		var resourceCountSurface = font.render(item.count, '#ffffff');
   		var messageSize = resourceCountSurface.getSize();
   		position[0] =  position[0] + 11;
   		display.blit(resourceCountSurface, position);
   		position[0] = position[0] + messageSize[0]+11;
   	});

   	var scoreValueSurface = font.render(scoreTotal, '#ffffff');
   	display.blit(scoreValueSurface, [globals.screenDim[0]-(scoreValueSurface.getSize()[0]+10),30]);
   }
   return this;
};
//var Reward = exports.Reward = function(rewardType,startLoc,group) {
//   //this.update = function() {
//   //   if(this.rect.top > 0) {
//   //      this.rect.top -= 1;
//   //   } else if (this.rect.left > 0) {
//   //      this.rect.left -= 1;
//   //   } 
//   //   else { this.kill();}
//   //}
//   Reward.superConstructor.apply(this, arguments);
//   switch(rewardType) {
//      case "Coal":
//         this.image = gamejs.image.load('assets/images/player/coalpop.png');
//      case "Green Gem":
//         this.image = gamejs.image.load('assets/images/player/greenpop.png');
//      case "Blue Gem":
//         this.image = gamejs.image.load('assets/images/player/bluepop.png');
//      case "Red Gem":
//         this.image = gamejs.image.load('assets/images/player/redpop.png');   
//   }
//   this.rect = new gamejs.Rect(startLoc,this.image.getSize());
//   globals.rewardGroup.add(this);
//   return this;
//}
//gamejs.utils.objects.extend(Reward, gamejs.sprite.Sprite);//