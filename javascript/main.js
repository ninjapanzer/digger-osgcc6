var gamejs = require('gamejs');
var view = require('./view');

// gamejs.preload([]);

gamejs.preload([
   'assets/images/5.jpg',
   'assets/tiles/tiletest.png'
]);

gamejs.ready(function() {

    var display = gamejs.display.setMode([600, 400]);
    //display.blit(new gamejs.image.load('assets/tiles/tiletest.png'));
    var tile = new view.Tile([64, 64]);
    var mainSurface = gamejs.display.getSurface();
    var gTiles = new gamejs.sprite.Group();
    gTiles.add(tile);
    //gTiles.draw(mainSurface);




    var tick = function(msDuration) {
        //gamejs.event.get();
        gTiles.draw(mainSurface);
    }
    gamejs.time.fpsCallback(tick, this, 60);
    /**
    function tick(msDuration) {
        // game loop
        return;
    };
    gamejs.time.fpsCallback(tick, this, 60);
    **/
});
