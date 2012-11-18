var gamejs = require('gamejs');

// gamejs.preload([]);

gamejs.preload([
   'assets/images/5.jpg'
]);

gamejs.ready(function() {

    var display = gamejs.display.setMode([600, 400]);
    display.blit(
        
    );


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
