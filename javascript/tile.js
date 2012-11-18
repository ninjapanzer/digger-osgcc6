var globals = require('./globals');

var Tile = exports.Tile = function(rect) {
   // call superconstructor
   Tile.superConstructor.apply(this, arguments);
   this.speed = 0;
   this.image = gamejs.image.load("assets/tiles/tiletest.png");
   var dims = this.image.getSize();
   this.rect = new gamejs.Rect(rect, dim);
   return this;
};
// inherit (actually: set prototype)
gamejs.utils.objects.extend(Tile, gamejs.sprite.Sprite);