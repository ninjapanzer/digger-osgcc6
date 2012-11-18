var globals = require('./globals');
var gamejs = require('gamejs');
globals.imgArray().push('assets/images/player/player_down.png');
globals.imgArray().push('assets/images/player/player_up.png');
globals.imgArray().push('assets/images/player/player_left.png');
globals.imgArray().push('assets/images/player/player_right.png');
var Player = exports.Player = function(initialLocation) {
	this.handle = function(event) {
      if (event.type === gamejs.event.KEY_DOWN) {
         if (event.key === gamejs.event.K_LEFT) {
         	if(this.rect.x - globals.tileSize[1] > 0){
         		this.rect.x -= globals.tileSize[1];
            	this.image = gamejs.image.load('assets/images/player/player_left.png');
         	}else{
         		this.rect.x += globals.screenDim[1]/2;
         	}
         } else if (event.key === gamejs.event.K_RIGHT) {
         	if(this.rect.x + globals.tileSize[1] < globals.screenDim[0]){
         		this.rect.x += globals.tileSize[1];
            	this.image = gamejs.image.load('assets/images/player/player_right.png');
         	}
         } else if (event.key === gamejs.event.K_DOWN) {
         	if(this.rect.y + globals.tileSize[0] < globals.screenDim[1]){
         		this.rect.y += globals.tileSize[0];
            	this.image = gamejs.image.load('assets/images/player/player_down.png');
         	}
         } else if (event.key === gamejs.event.K_UP) {
         	if(this.rect.y - globals.tileSize[0] > 0){
           		this.rect.y -= globals.tileSize[0];
            	this.image = gamejs.image.load('assets/images/player/player_up.png');
        	}
         }
      }
    };

	//calls superconstructor
	Player.superConstructor.apply(this, arguments);
	//instance variables
	this.image = gamejs.image.load('assets/images/player/player_right.png');
	this.rect = new gamejs.Rect(initialLocation,this.image.getSize());
	return this;	
}
gamejs.utils.objects.extend(Player, gamejs.sprite.Sprite);