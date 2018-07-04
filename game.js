var Game = function(fps) {
    // 将监听的事件移至对象里面，抽象至 Game 里面去
    var g = {
        actions: {},  // 存储事件定义函数
        keydowns: {}, // 存储按键的状态
    }
    // events
    window.addEventListener("keydown", function(event) {
        g.keydowns[event.key] = true
    })

    window.addEventListener("keyup", function(event) {
        g.keydowns[event.key] = false
    })

    g.registerAction = function(key, callback) {
        g.actions[key] = callback
    }
    
    // drawImage
    g.drawImage = function(GuaImage) {
        g.context.drawImage(GuaImage.image, GuaImage.x, GuaImage.y)
    }
    // timer
    var canvas = document.querySelector("#id-canvas")
    var context = canvas.getContext("2d")

    g.canvas = canvas
    g.context = context

    setInterval(function() {
        // update
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if(g.keydowns[key]) {
                // 被按下
                g.actions[key]()
            }
        }
        g.update()
        // clear
        context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        // draw
        g.draw()
    }, 1000 / fps)

    return g
}
