var gamejs = require('gamejs');

// gamejs.preload([]);

gamejs.preload([
   'assets/images/5.jpg',
   'assets/tiles/tiletes.png'
]);

gamejs.ready(function() {

    var display = gamejs.display.setMode([600, 400]);
    display.blit(new gamejs.image.load('assets/images/5.jpg'));
    




    var tick = function(msDuration) {
        gamejs.event.get();
    }

    /**
    function tick(msDuration) {
        // game loop
        return;
    };
    gamejs.time.fpsCallback(tick, this, 60);
    **/
});
