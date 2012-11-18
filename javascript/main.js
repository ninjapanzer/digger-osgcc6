var globals = require('./globals');
var gamejs = require('gamejs');
var view = require('./view');
var tile = require('./tile');
var player = require('./player');

// gamejs.preload([]);

gamejs.preload(globals.imgArray());

gamejs.ready(function() {

    var display = gamejs.display.setMode(globals.screenDim);
    display.blit(new gamejs.image.load('assets/tiles/tiletest.png'));
    //var tile = new tile.Tile([64, 64]);
    var mainSurface = gamejs.display.getSurface();
    var tileGroupControl = tile.Setup([]);;
    var myPlayer = new player.Player([64,0], tileGroupControl);
    globals.Player = myPlayer;
    //myPlayer.draw(mainSurface);
    var HUD = new view.HUD;

    var tick = function(msDuration) {
        gamejs.event.get().forEach(function(event) {
            myPlayer.handle(event);
        });
        display.clear();
        tileGroupControl.tileGroup.draw(mainSurface);
        //myPlayer.addInventory("Coal");
        //myPlayer.addInventory("Red Gem");
        //myPlayer.addInventory("Blue Gem");
        //myPlayer.addInventory("Green Gem");
        //myPlayer.addInventory("Diamond");
        myPlayer.update(msDuration);
        myPlayer.draw(mainSurface);
        HUD.draw(mainSurface);
        HUD.update(myPlayer, display);
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
