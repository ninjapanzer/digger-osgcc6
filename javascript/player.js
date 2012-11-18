var globals = require('./globals');
var gamejs = require('gamejs');
globals.imgArray().push('assets/images/player/player_down.png');
globals.imgArray().push('assets/images/player/player_up.png');
globals.imgArray().push('assets/images/player/player_left.png');
globals.imgArray().push('assets/images/player/player_right.png');
var Player = exports.Player = function(initialLocation) {
	//calls superconstructor
	Player.superConstructor.apply(this, arguments);
	//instance variables
	this.image = gamejs.image.load('assets/images/player/player_right.png');
	this.rect = new gamejs.Rect(initialLocation,this.image.getSize());
	return this;	
}
gamejs.utils.objects.extend(Player, gamejs.sprite.Sprite);