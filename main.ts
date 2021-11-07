function LED_Disp (list: any[]) {
    for (let x = 0; x <= 4; x++) {
        b = list[x]
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
let b: any = null
let ledDisp = [
20,
21,
10,
8,
27
]
LED_Disp(ledDisp)
basic.forever(function () {
	
})
