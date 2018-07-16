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
    // var level = leves[0]
    // 现在循环加入三个砖块
    var blocks = []
    var leves = JSON.parse(localStorage.leve)
    var m = leves[n - 1] || []
    for (var i = 0; i < m.length; i++) {
        var p = m[i]
        var block = Block(game, p)
        blocks.push(block)
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
        bg: "img/bg.png",
        1: 'img/1.png',
        2: 'img/2.png',
        3: 'img/3.png',
        4: 'img/4.png',
        5: 'img/5.png',
        6: 'img/6.png',
        7: 'img/7.png',
        8: 'img/8.png',
    }
    // 异步记载
    var game = Game.instance(30, images, function(game) {
        var s = SceneStart.new(game)
        game.runWithScene(s)
        enableDebugMode(game, true)
    })
}

__main()
