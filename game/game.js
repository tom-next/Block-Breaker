// var Game = function(fps, images, runCallback) {
//
//     // images: 加载的图片资源路径
//     // 将监听的事件移至对象里面，抽象至 Game 里面去
//     var g = {
//         scene: null,
//         actions: {},  // 存储事件定义函数
//         keydowns: {}, // 存储按键的状态
//         images: {},   // 有个想法是切换关卡的时候加载图片, 先在这里统一加载
//     }
//     // events
//     window.addEventListener("keydown", function(event) {
//         g.keydowns[event.key] = true
//     })
//
//     window.addEventListener("keyup", function(event) {
//         g.keydowns[event.key] = false
//     })
//
//     g.registerAction = function(key, callback) {
//         g.actions[key] = callback
//     }
//
//     // drawImage
//     g.drawImage = function(GuaImage) {
//         g.context.drawImage(GuaImage.image, GuaImage.x, GuaImage.y)
//     }
//     // timer
//     var canvas = document.querySelector("#id-canvas")
//     var context = canvas.getContext("2d")
//
//     g.canvas = canvas
//     g.context = context
//
//     window.fps = 30
//     // 需求: 为了在程序运行中动态的修改 fps, 修改为 setTimeout 来解决
//     var runloop = function() {
//         // update
//         var actions = Object.keys(g.actions)
//         for (var i = 0; i < actions.length; i++) {
//             var key = actions[i]
//             if(g.keydowns[key]) {
//                 // 被按下
//                 g.actions[key]()
//             }
//         }
//         g.update()
//         // clear
//         context.clearRect(0, 0, g.canvas.width, g.canvas.height)
//         // draw
//         g.draw()
//         setTimeout(function() {
//             runloop()
//         }, 1000 / window.fps)
//     }
//
//
//     // 加载图片后, 引用
//     var names = Object.keys(images)
//     for (let i = 0; i < names.length; i++) {
//         let n = names[i]
//         let path = images[n]
//
//         let img = new Image()
//         img.src = path
//
//         img.onload = function() {
//             // 加载完成之后，启动游戏
//             g.images[n] = img
//             if(i === names.length - 1) {
//                 g.run()
//             }
//         }
//     }
//
//     g.imageByName = function(name) {
//         var img = g.images[name]
//         var image = {
//             image: img,
//             w: img.width,
//             h: img.height,
//         }
//         return image
//     }
//
//     g.replaceScene = function(scene) {
//         g.scene = scene
//     }
//
//     g.update = function() {
//         g.scene && g.scene.update()
//     }
//
//     g.draw = function() {
//         g.scene && g.scene.draw()
//     }
//
//     g.runWithScene = function(scene) {
//         g.scene = scene
//         setTimeout(function() {
//             runloop()
//         }, 1000 / fps)
//     }
//
//     g.run = function() {
//         runCallback(g)
//     }
//
//     return g
// }
class Game {
    constructor(fps, images, runCallback) {
        window.fps = fps
        this.images = images
        this.runCallback = runCallback
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        // timer
        this.canvas = document.querySelector("#id-canvas")
        this.context = this.canvas.getContext("2d")

        // events
        var self = this
        window.addEventListener("keydown", function(event) {
            self.keydowns[event.key] = true
        })

        window.addEventListener("keyup", function(event) {
            self.keydowns[event.key] = false
        })

        this._init()
    }
    static instance(...arg) {
        this.i = this.i || new this(...arg)
        return this.i
    }
    registerAction(key, callback) {
        this.actions[key] = callback
    }

    // drawImage
    drawImage(GuaImage) {
        if(GuaImage.w) {
            this.context.drawImage(GuaImage.image, GuaImage.x, GuaImage.y, GuaImage.w, GuaImage.h)
        }else {
            this.context.drawImage(GuaImage.image, GuaImage.x, GuaImage.y)
        }
    }

    runloop() {
        // update
        var g = this
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
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        // draw
        g.draw()
        setTimeout(function() {
            g.runloop()
        }, 1000 / window.fps)
    }

    _init() {
        var g = this
        var names = Object.keys(this.images)
        for (let i = 0; i < names.length; i++) {
            let n = names[i]
            let path = this.images[n]

            let img = new Image()
            img.src = path

            img.onload = function() {
                // 加载完成之后，启动游戏
                g.images[n] = img
                if(i === names.length - 1) {
                    g.run()
                }
            }
        }
    }

    imageByName(name) {
        var img = this.images[name]
        var image = {
            image: img,
            w: img.width,
            h: img.height,
        }
        return image
    }

    replaceScene(scene) {
        this.scene = scene
    }

    update() {
        this.scene && this.scene.update()
    }

    draw() {
        this.scene && this.scene.draw()
    }

    runWithScene(scene) {
        var g = this
        g.scene = scene
        setTimeout(function() {
            g.runloop()
        }, 1000 / fps)
    }

    run() {
        this.runCallback(this)
    }
}
