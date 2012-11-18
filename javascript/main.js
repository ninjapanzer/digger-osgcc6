var globals = require('./globals');
var gamejs = require('gamejs');
var view = require('./view');
var tile = require('./tile');
var player = require('./player');


// gamejs.preload([]);

gamejs.preload(globals.imgArray());

gamejs.ready(function() {

    var display = gamejs.display.setMode([600, 400]);
    display.blit(new gamejs.image.load('assets/tiles/tiletest.png'));
    //var tile = new tile.Tile([64, 64]);
    var mainSurface = gamejs.display.getSurface();
    //var gTiles = new gamejs.sprite.Group();
    var myPlayer = new player.Player([64,0]);
    myPlayer.draw(mainSurface);
    //gTiles.add(tile);
    //gTiles.draw(mainSurface);

    var tick = function(msDuration) {
        //gamejs.event.get();
        //gTiles.draw(mainSurface);
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
