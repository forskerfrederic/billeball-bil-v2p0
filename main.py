def Lys__F():
    bitbot.set_pixel_color(0, 0x0000FF)
    bitbot.set_pixel_color(1, 0x0000FF)
    bitbot.set_pixel_color(2, 0x0000FF)
    bitbot.set_pixel_color(3, 0x18E600)
    bitbot.set_pixel_color(4, 0x18E600)
    bitbot.set_pixel_color(5, 0x18E600)
    bitbot.set_pixel_color(6, 0x0000FF)
    bitbot.set_pixel_color(7, 0x0000FF)
    bitbot.set_pixel_color(8, 0x0000FF)
    bitbot.set_pixel_color(9, 0x18E600)
    bitbot.set_pixel_color(10, 0x18E600)
    bitbot.set_pixel_color(11, 0x18E600)
def Lys__V():
    bitbot.set_pixel_color(0, 0x18E600)
    bitbot.set_pixel_color(1, 0x18E600)
    bitbot.set_pixel_color(2, 0x18E600)
    bitbot.set_pixel_color(3, 0x00FF00)
    bitbot.set_pixel_color(4, 0x00FF00)
    bitbot.set_pixel_color(5, 0x00FF00)
    bitbot.set_pixel_color(6, 0x0000FF)
    bitbot.set_pixel_color(7, 0x0000FF)
    bitbot.set_pixel_color(8, 0x0000FF)
    bitbot.set_pixel_color(9, 0x0000FF)
    bitbot.set_pixel_color(10, 0x0000FF)
    bitbot.set_pixel_color(11, 0x0000FF)
def Lys__B():
    bitbot.set_pixel_color(0, 0x18E600)
    bitbot.set_pixel_color(1, 0x18E600)
    bitbot.set_pixel_color(2, 0x18E600)
    bitbot.set_pixel_color(3, 0x0000FF)
    bitbot.set_pixel_color(4, 0x0000FF)
    bitbot.set_pixel_color(5, 0x0000FF)
    bitbot.set_pixel_color(6, 0x18E600)
    bitbot.set_pixel_color(7, 0x18E600)
    bitbot.set_pixel_color(8, 0x18E600)
    bitbot.set_pixel_color(9, 0x0000FF)
    bitbot.set_pixel_color(10, 0x0000FF)
    bitbot.set_pixel_color(11, 0x0000FF)

def on_received_number(receivedNumber):
    global GoTime
    if receivedNumber == 0:
        GoTime = False
        for index in range(4):
            bitbot.set_led_color(0x000000)
            music.play_tone(131, music.beat(BeatFraction.HALF))
            bitbot.set_led_color(0xFF0000)
            music.rest(music.beat(BeatFraction.HALF))
    elif receivedNumber == 1:
        GoTime = True
        for index2 in range(4):
            bitbot.set_led_color(0x18E600)
            music.play_tone(262, music.beat(BeatFraction.HALF))
            bitbot.set_led_color(0xFF0000)
            music.rest(music.beat(BeatFraction.HALF))
radio.on_received_number(on_received_number)

def on_received_string(receivedString):
    if receivedString == "F":
        Lys__F()
        bitbot.go(BBDirection.FORWARD, 50)
    elif receivedString == "B":
        Lys__B()
        bitbot.go(BBDirection.REVERSE, 50)
    elif receivedString == "V":
        Lys__V()
        bitbot.rotate(BBRobotDirection.LEFT, 20)
    elif receivedString == "H":
        Lys__H()
        bitbot.rotate(BBRobotDirection.RIGHT, 20)
    else:
        bitbot.set_led_color(0x0000FF)
        bitbot.stop(BBStopMode.COAST)
radio.on_received_string(on_received_string)

def Lys__H():
    bitbot.set_pixel_color(0, 0x0000FF)
    bitbot.set_pixel_color(1, 0x0000FF)
    bitbot.set_pixel_color(2, 0x0000FF)
    bitbot.set_pixel_color(3, 0x0000FF)
    bitbot.set_pixel_color(4, 0x0000FF)
    bitbot.set_pixel_color(5, 0x0000FF)
    bitbot.set_pixel_color(6, 0x18E600)
    bitbot.set_pixel_color(7, 0x18E600)
    bitbot.set_pixel_color(8, 0x18E600)
    bitbot.set_pixel_color(9, 0x18E600)
    bitbot.set_pixel_color(10, 0x18E600)
    bitbot.set_pixel_color(11, 0x18E600)
bitbot.set_led_color(0x0000FF)
GoTime = False
Draktnummer = 1
basic.show_string("" + str((Draktnummer)))
radio.set_group(100 + Draktnummer)