//player variables
var gravity = 0.4
var positionX = 200
var positionY = 0
var velocityX = 0
var velocityY = 0
var manSize = 20
var maxFallSpeed = 8

var keys = []
func keyIsPressed(){keys[keyCode]=true}
func keyIsReleased(){keys[keyCode]=false}

//makes platforms
var platforms[]

func makePlatforms(x,y,width,height,color)
