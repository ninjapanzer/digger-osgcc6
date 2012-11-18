var gamejs = require('gamejs');
var globals = require('./globals');
globals.img.push('assets/images/5.jpg');
globals.img.push('assets/tiles/tiletest.png');

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
