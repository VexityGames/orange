//This is a game by VexityGames created by Brendon Ho on JavaScript
//Peter Soboyejo is also a contributor
var creator = "Brendon Ho";


var keys = []
var keyisPressed = function(){keys[keyCode]=true;};
var keyisReleased = function(){keys[keyCode]=false};

//player functions
var graviy: 0.4;
var maxFallSpeed = 8;
var positionX = 200;
var positionY = 0;
var velocityX = 0;
var velocityY = 0;
var manSize = 20;
var jumping = true;

//platforms
var platforms = []

var collideWith = function(xv, yv, platforms) {
    for (var each in platforms) {
        var p = platforms[each];
        // Checks for Collision
        if( positionY + ballSize > p.y &&
            positionY < p.y + p.height &&
            positionX + ballSize > p.x &&
            positionX < p.x + p.width)
        { // FROM
        if(yv>0) { // BOTTOM
            velocityY = 0;
            jumping = false;
            positionY = p.y-ballSize;
        }
        if(yv<0) { // TOP
            velocityY = 0;
            jumping = true;
            positionY = p.y+p.height;
        }
        if(xv>0) { // RIGHT
            velocityX = 0;
            positionX = p.x-ballSize;
        }
        if(xv<0) { // LEFT
            velocityX = 0;
            positionX = p.x+p.width;
        }
    }
    }
};




//makes platforms
var makePlatforms = function(x,y,width,height,color){
  platforms.push({
    x: x,y: y,
    width: width, height: height,
    color: color
  });
};
makePlatforms(100,100,100,100);
makePlatforms(100,100,100,100);

var orangePlatforms = [];

var makeOrangePlatforms = function(x,y,width,height,color){
    orangePlatforms.push({
       x: x, y: y,
       width: width, height: height,
       color: color
    });
    if(collideWith===makeOrangePlatforms){
        printIn("GAME OVER")
    }
};


 
