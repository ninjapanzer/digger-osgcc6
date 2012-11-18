var globals = require('./globals');
var gamejs = require('gamejs');
globals.imgArray().push('assets/images/player/player_down.png');
globals.imgArray().push('assets/images/player/player_up.png');
globals.imgArray().push('assets/images/player/player_left.png');
globals.imgArray().push('assets/images/player/player_right.png');
var Player = exports.Player = function(initialLocation, tileControl) {
	this.tileControl = tileControl;
	this.handle = function(event) {
      if (event.type === gamejs.event.KEY_DOWN) {
         if (event.key === gamejs.event.K_LEFT) {
         	if(this.rect.x - globals.tileSize[1] > 0){
         		this.rect.x -= globals.tileSize[1];
            	this.image = gamejs.image.load('assets/images/player/player_left.png');
         	}else{
         		var half = globals.screenDim[1]/2;
         		this.rect.x += half;
         		this.tileControl.move([0,half]);
         	}
         } else if (event.key === gamejs.event.K_RIGHT) {
         	if(this.rect.x + globals.tileSize[1] < globals.screenDim[0]){
         		this.rect.x += globals.tileSize[1];
            	this.image = gamejs.image.load('assets/images/player/player_right.png');
         	}else{
         		var half = globals.screenDim[1]/2;
         		this.rect.x -= half;
         		this.tileControl.move([0,-1*(half)]);
         	}
         } else if (event.key === gamejs.event.K_DOWN) {
         	if(this.rect.y + globals.tileSize[0] < globals.screenDim[1]){
         		this.rect.y += globals.tileSize[0];
            	this.image = gamejs.image.load('assets/images/player/player_down.png');
         	}else{
         		var half = globals.screenDim[0]/2;
         		this.rect.y -= half;
         		this.tileControl.move([-1*(half),0]);
         	}
         } else if (event.key === gamejs.event.K_UP) {
         	if(this.rect.y - globals.tileSize[0] > 0){
           		this.rect.y -= globals.tileSize[0];
            	this.image = gamejs.image.load('assets/images/player/player_up.png');
        	}else{
         		var half = globals.screenDim[0]/2;
         		this.rect.y += half;
         		this.tileControl.move([half,0]);
         	}
         }
      }
    };

	//calls superconstructor
	Player.superConstructor.apply(this, arguments);
	//instance variables
	this.image = gamejs.image.load('assets/images/player/player_right.png');
	this.rect = new gamejs.Rect(initialLocation,this.image.getSize());
   this.inventory = [];
	return this;	
}
gamejs.utils.objects.extend(Player, gamejs.sprite.Sprite);

var Item = exports.Item = function(name, value, image){
   globals.imgArray().push(image);
   this.name = name;
   this.value = value;
   this.image = gamejs.image.load(image);
   var dims = this.image.getSize();
   this.rect = new gamejs.Rect([0,0], dims);
   return this;
}
gamejs.utils.objects.extend(Item, gamejs.sprite.Sprite);