var SceneStart = function(game) {
    var s = {
        game: game
    }

    s.update = function() {

    }

    s.draw = function() {
        game.context.fillText("按 k 开始游戏", game.canvas.width / 2 - 20, game.canvas.height / 2)
    }
    
    game.registerAction('k', function() {
        var s = Scene(game)
        game.replaceScene(s)
    })
    return s
}
