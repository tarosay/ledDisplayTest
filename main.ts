let b = 0
let ledDisp = [
31,
0,
31,
0,
31
]
basic.forever(function () {
    for (let index = 0; index < 5; index++) {
        b = ledDisp[0]
        if (b % 2 == 1) {
            led.plot(0, 0)
        } else {
            led.unplot(0, 0)
        }
        b = Math.trunc(ledDisp[0] / 2)
        if (b % 2 == 1) {
            led.plot(0, 1)
        } else {
            led.unplot(0, 1)
        }
    }
})
