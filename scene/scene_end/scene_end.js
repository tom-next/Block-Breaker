var SceneEnd = function(game) {
    var s = {
        game: game
    }

    s.update = function() {

    }

    s.draw = function() {
        game.context.fillText("Game Over", game.canvas.width / 2 - 20, game.canvas.height / 2)

    }

    return s
}
