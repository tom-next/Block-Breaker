var Paddle = function() {
    var image = imageFromPath("img/paddle.png")
    var o = {
        image: image,
        x: 200,
        y: 200,
        speed: 15,
    }
    o.move = function(x) {
        if(x < 0){
            x = 0
        }
        if(x > 400 - o.image.width) {
            x = 400 - o.image.width
        }
        o.x = x
    }
    o.moveLeft = function() {
        // o.x -= o.speed
        o.move(o.x - o.speed)
        // if(o.x < 0) {
        //     o.x = 0
        // }
    }
    o.moveRight = function() {
        // o.x += o.speed
        o.move(o.x + o.speed)
        // if(o.x > 400 - o.image.width) {
        //     o.x = 400 - o.image.width
        // }
    }
    o.collide = function(ball) {
        if(ball.y + ball.image.width > o.y) {
            if(ball.x > o.x && ball.x < o.x + o.image.width) {
                return true
            }
        }
        return false
    }
    return o
}
