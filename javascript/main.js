var gamejs = require('gamejs');
var view = require('./view');
var tile = require('./tile');
var player = require('./player');
var globals = require('./globals');


// gamejs.preload([]);

gamejs.preload(globals.img);

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
