var globals = require('./globals');
var gamejs = require('gamejs');
var view = require('./view')
globals.imgArray().push('assets/images/5.jpg');
globals.imgArray().push('assets/tiles/tiletest.png');
globals.imgArray().push('assets/tiles/layer0.png');
globals.imgArray().push('assets/tiles/layer1.png');
globals.imgArray().push('assets/tiles/layer2.png');
globals.imgArray().push('assets/tiles/layer3.png');
globals.imgArray().push('assets/tiles/layer4.png');
globals.imgArray().push('assets/sounds/coal_pick_up.wav');
var Tile = exports.Tile = function(rect) {
   // call superconstructor
   Tile.superConstructor.apply(this, arguments);
   this.speed = 0;
   this.difficulty=0;
   this.image = gamejs.image.load("assets/tiles/layer"+this.difficulty+".png");

   this.lockin = function(difficulty){
      this.difficulty = difficulty;
      this.image = gamejs.image.load("assets/tiles/layer"+this.difficulty+".png");
   }

   var dims = this.image.getSize();
   this.rect = new gamejs.Rect(rect, dims);

   this.kill = function(){
      if(this.difficulty > globals.Player.difficulty){
         return;
      }
      this._alive = false;
      this._groups.forEach(function(group) {
         group.remove(this);
      }, this);
      globals.destroyCount += (5-this.difficulty)/.5;
      globals.destroyCount++;
      var awardpercentage = globals.destroyCount/100;
      if(awardpercentage > Math.random()){
         this.distributeRewards();
      }
      return;
   }

   this.distributeRewards = function(){
      console.log("gems");
      var rdm = Math.random();
      switch(this.difficulty)
      {
         case 4:
         if(rdm > .3){
            globals.Player.addInventory("Diamond");
         }
         if(rdm > .2){
            globals.Player.addInventory("Green Gem");
         }
         if(rdm > .1){
            globals.Player.addInventory("Blue Gem");
         }
         if(rdm > .05){
            globals.Player.addInventory("Red Gem");
         }
         globals.Player.addInventory("Coal");
         case 3:
         if(rdm > .4){
            globals.Player.addInventory("Diamond");
         }
         if(rdm > .3){
            globals.Player.addInventory("Green Gem");
         }
         if(rdm > .2){
            globals.Player.addInventory("Blue Gem");
         }
         if(rdm > .1){
            globals.Player.addInventory("Red Gem");
         }
            globals.Player.addInventory("Coal");
         case 2:
         if(rdm > .5){
            globals.Player.addInventory("Diamond");
         }
         if(rdm > .4){
            globals.Player.addInventory("Green Gem");
         }
         if(rdm > .3){
            globals.Player.addInventory("Blue Gem");
         }
         if(rdm > .2){
            globals.Player.addInventory("Red Gem");
         }
            globals.Player.addInventory("Coal");
         case 1:
         if(rdm > .5){
            globals.Player.addInventory("Green Gem");
         }
         if(rdm > .4){
            globals.Player.addInventory("Blue Gem");
         }
         if(rdm > .3){
            globals.Player.addInventory("Red Gem");
         }
            globals.Player.addInventory("Coal");
         default:
         if(rdm > .4){
            globals.Player.addInventory("Red Gem");
         }
            globals.Player.addInventory("Coal");
      }
      globals.destroyCount = 0;
   };

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
   var difficulty = 0;
	for(var i = 2; i < globals.tileDim[0]; i++){
      //console.log(difficulty)
      if(i%10 == 0 && difficulty < 4){
            difficulty++;
         }
		for(var j = 0; j < globals.tileDim[1]; j++){
         var t = new Tile([64*j,64*i]);
         if(Math.random()>.97 && difficulty < 4){
            t.lockin(difficulty+1);
         }else{
            t.lockin(difficulty);
         }
         
         tileGroup.add(t);
		}
	}
	return new GroupController(tileGroup,[]);
};