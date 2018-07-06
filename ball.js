var Ball = function() {
    var image = imageFromPath("img/ball.png")
    var o = {
        image: image,
        x: 220,
        y: 180,
        speedX: 10,
        speedY: 10,
        fired: false,
    }
    o.fire = function() {
        o.fired = true
    }
    o.rebound = function() {
        o.speedY *= -1
    }
    o.move = function() {
        if(o.fired) {
            if(o.x < 0 || o.x > 400) {
                o.speedX = -o.speedX
            }
            if(o.y < 0 || o.y > 300) {
                o.speedY = -o.speedY
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    return o
}
