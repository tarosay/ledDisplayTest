function LED_Disp (list: any[]) {
    for (let x = 0; x <= 4; x++) {
        b = ledDisp[x]
        for (let y = 0; y <= 4; y++) {
            if (b % 2 == 1) {
                led.plot(x, y)
            } else {
                led.unplot(x, y)
            }
            b = Math.trunc(b / 2)
        }
    }
}
let b = 0
let ledDisp: number[] = []
ledDisp = [
0,
1,
2,
3,
4
]
LED_Disp(ledDisp)
basic.forever(function () {
	
})
