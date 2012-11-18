var globals = require('./globals');
var gamejs = require('gamejs');

globals.imgArray().push('assets/images/5.jpg');
globals.imgArray().push('assets/tiles/tiletest.png');

var Tile = exports.Tile = function(rect) {
   // call superconstructor
   Tile.superConstructor.apply(this, arguments);
   this.speed = 0;
   this.image = gamejs.image.load("assets/tiles/tiletest.png");
   var dims = this.image.getSize();
   this.rect = new gamejs.Rect(rect, dims);
   console.log(this.kill);
   this.kill = function(){
      this._alive = false;
      this._groups.forEach(function(group) {
         group.remove(this);
      }, this);
      return;
      }
   return this;
};
// inherit (actually: set prototype)
gamejs.utils.objects.extend(Tile, gamejs.sprite.Sprite);

var GroupController = function(tileGroup, offsets){

	this.tileGroup = tileGroup;
	this.offsets = offsets;
	this.rect = new gamejs.Rect([0,0],[globals.tileDim[0]*globals.tileSize[0], globals.tileDim[1]*globals.tileSize[1]]);

	this.handle = function(event) {
		if (event.type === gamejs.event.KEY_DOWN) {
         if (event.key === gamejs.event.K_LEFT) {
            this.move([0,-64]);
         } else if (event.key === gamejs.event.K_RIGHT) {
            this.move([0,64]);
         } else if (event.key === gamejs.event.K_DOWN) {
            this.move([64,0]);
         } else if (event.key === gamejs.event.K_UP) {
            this.move([-64,0]);
         }
      }
   };

   this.move = function(rect){
   		this.tileGroup.forEach(function(tile) {
   			tile.rect.y += rect[0];
   			tile.rect.x += rect[1];
		});
   }
   return this;
};

var tiles = ['assets/images/5.jpg', 'assets/images/5.jpg', 'assets/images/5.jpg', 'assets/images/5.jpg', 'assets/images/5.jpg'];

var Setup = exports.Setup = function(tiles){
	//50x100

	var tileGroup = new gamejs.sprite.Group();
	for(var i = 0; i < globals.tileDim[0]; i++){
		for(var j = 2; j < globals.tileDim[1]; j++){
			tileGroup.add(new Tile([64*i,64*j]));
		}
	}
	return new GroupController(tileGroup,[]);
};