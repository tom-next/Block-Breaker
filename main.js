var enableDebugMode = function(game, enable) {
    if(!enable) {
        return;
    }
    window.addEventListener("keydown", function(event) {
        var k = event.key
        if(k === "p") {
            // 暂停功能
            paused = !paused
        }else if ("123456789".includes(k)) {
            // 关卡
            blocks = loadLeves(game, Number(k))
        }
    })

    // 控制速度
    document.querySelector("#id-input-speed").addEventListener("input", function(e) {
        window.fps = Number(e.target.value)
    })
}

var loadLeves = function(game, n) {
    n = n - 1
    var level = leves[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}

var __main = function() {

    // todo 新的想法 做成一个数组，对应的关卡加载对应的资源文件，目前先全部加载
    var images = {
        ball: "img/ball.png",
        paddle: "img/paddle.png",
        backImg: "img/bg.png",
        block: "img/block.png",
    }
    // 异步记载
    var game = Game(30, images, function() {

        var s = Scene(game)
        game.update = function() {
            s.update()
        }
        game.draw = function() {
            s.draw()
        }
        enableDebugMode(game, true)

    })


}

__main()
