let x = 0
let y = 0
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        led.plot(x, y)
        basic.pause(1000)
        led.unplot(x, y)
        x += 1
    }
    for (let index = 0; index < 4; index++) {
        led.plot(x, y)
        basic.pause(1000)
        led.unplot(x, y)
        x += -1
    }
})
