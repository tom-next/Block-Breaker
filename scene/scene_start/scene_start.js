// var SceneStart = function(game) {
//     var s = {
//         game: game
//     }
//
//     s.update = function() {
//
//     }
//
//     s.draw = function() {
//         game.context.fillText("按 k 开始游戏", game.canvas.width / 2 - 20, game.canvas.height / 2)
//     }
//
//     game.registerAction('k', function() {
//         var s = Scene(game)
//         game.replaceScene(s)
//     })
//     return s
// }
class SceneStart extends Scene {
    constructor(game) {
        super(game)
        game.registerAction('k', function() {
            var s = SceneMain(game)
            game.replaceScene(s)
        })
    }
    draw() {
        this.game.context.fillText("按 k 开始游戏", this.game.canvas.width / 2 - 20, this.game.canvas.height / 2)
    }
}
