def LED_Disp(list2: List[any]):
    global b
    for x in range(5):
        list3: List[number] = []
        b = list3[x]
        for y in range(5):
            if b % 2 == 1:
                led.plot(x, y)
            else:
                led.unplot(x, y)
            b = int(b / 2)
b = 0
ledDisp = [0, 1, 2, 3, 4]
LED_Disp(ledDisp)
basic.show_number(ledDisp[3])

def on_forever():
    pass
basic.forever(on_forever)
