class SceneStart extends Scene {
    constructor(game) {
        super(game)
        game.registerAction('k', function() {
            var s = SceneMain(game)
            game.replaceScene(s)
        })
        game.registerAction('e', function() {
            var s = SceneEdit.new(game)
            game.replaceScene(s)
        })
    }
    draw() {
        this.game.context.fillText("按 k 开始游戏", this.game.canvas.width / 2 - 20, this.game.canvas.height / 2)
        this.game.context.fillText("按 e 开始游戏", this.game.canvas.width / 2, this.game.canvas.height / 2 + 50)
    }
}
