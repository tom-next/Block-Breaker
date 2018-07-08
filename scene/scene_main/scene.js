var Scene = function(game) {
    var s = {

    }
    var paddle = Paddle(game)
    var ball = Ball(game)
    blocks = loadLeves(game, 1)
    var score = 100
    game.registerAction("a", function() {
        paddle.moveLeft()
    })

    game.registerAction("d", function() {
        paddle.moveRight()
    })

    game.registerAction("f", function() {
        ball.fire()
    })
    var enableDrag = false
    game.canvas.addEventListener("mousedown", function(event) {
        var x = event.offsetX
        var y = event.offsetY
        // 设置 可以拖动
        if(ball.hasPoint(x, y)) {
            enableDrag = true
        }
    })

    game.canvas.addEventListener("mousemove", function(event) {
        var x = event.offsetX
        var y = event.offsetY
        if(enableDrag) {
            ball.x = x
            ball.y = y
        }
    })

    game.canvas.addEventListener("mouseup", function(event) {
        var x = event.offsetX
        var y = event.offsetY
        enableDrag = false
    })

    s.update = function() {
        if(paused) {
            return;
        }
        ball.move()
        if(ball.y > paddle.y) {
            var end = SceneEnd(game)
            game.replaceScene(end)
            return;
        }
        if(paddle.collide(ball)) {
            ball.rebound()
        }
        for (var i = 0; i < blocks.length; i++) {
            var b = blocks[i]
            if(b.collide(ball)) {
                b.kill()
                ball.rebound()
            }
        }
    }

    s.draw = function() {
        // draw backImg
        game.context.fillStyle = "green";
        game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);

        game.drawImage(paddle)
        game.drawImage(ball)
        for (var i = 0; i < blocks.length; i++) {
            var b = blocks[i]
            // draw
            if(b.alive) {
                game.drawImage(b)
            }
        }
        // draw text
        game.context.fillText("分数: "+score, 10, 290)
    }
    return s
}
