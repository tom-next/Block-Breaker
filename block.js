var Block = function(position) {
    // position 是 [0, 0]格式
    var p = position
    var image = imageFromPath("img/block.png")
    var o = {
        image: image,
        x: p[0],
        y: p[1],
        width: 27,
        height: 27,
        alive: true,
        lifes: p[2] || 1,
    }
    o.kill = function() {
        o.lifes--
        if(o.lifes < 1) {
            o.alive = false
        }
    }

    o.collide = function(ball) {
        return o.alive && (rectIntersects(o, ball) || rectIntersects(ball, o))
    }

    return o
}
