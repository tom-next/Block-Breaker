var Block = function() {
    var image = imageFromPath("img/block.png")
    var o = {
        image: image,
        x: 100,
        y: 150,
        width: 27,
        height: 27,
        alive: true,
    }
    o.kill = function() {
        o.alive = false
    }

    o.collide = function(ball) {
        return o.alive && (rectIntersects(o, ball) || rectIntersects(ball, o))
    }

    return o
}
