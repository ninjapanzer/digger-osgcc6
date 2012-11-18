var MapController = function() {

   this.offset = [0,0];

   this.handle = function(event) {
      if (event.type === gamejs.event.KEY_DOWN) {
         if (event.key === gamejs.event.K_LEFT) {
            this.offset[0] += 50;
         } else if (event.key === gamejs.event.K_RIGHT) {
            this.offset[0] -= 50;
         } else if (event.key === gamejs.event.K_DOWN) {
            this.offset[1] -= 50;
         } else if (event.key === gamejs.event.K_UP) {
            this.offset[1] += 50;
         }
      }
   };

   this.update = function(msDuration) {

   };

   return this;
};

var Tile = function(rect) {
   // call superconstructor
   Ship.superConstructor.apply(this, arguments);
   this.speed = 0;
   this.originalImage = gamejs.image.load("assets/tiles/tiletest.png");
   var dims = this.originalImage.getSize();
   this.originalImage = gamejs.transform.scale(
                                this.originalImage,
                                [dims[0] * (0.5 + Math.random()), dims[1] *  (0.5 + Math.random())]
                        );
   //this.rotation = 50 + parseInt(120*Math.random());
   //this.image = gamejs.transform.rotate(this.originalImage, this.rotation);
   this.rect = new gamejs.Rect(rect);
   return this;
};
// inherit (actually: set prototype)
gamejs.utils.objects.extend(Tile, gamejs.sprite.Sprite);