radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        if (GoTime) {
            GoTime = false
            bitbot.stop(BBStopMode.Coast)
            for (let index = 0; index < 4; index++) {
                bitbot.setLedColor(0x000000)
                music.playTone(131, music.beat(BeatFraction.Half))
                bitbot.setLedColor(Lagfarge)
                music.rest(music.beat(BeatFraction.Half))
            }
        }
    } else if (receivedNumber == 1) {
        if (!(GoTime)) {
            for (let index = 0; index < 4; index++) {
                bitbot.setLedColor(0x00FF00)
                music.playTone(523, music.beat(BeatFraction.Half))
                bitbot.setLedColor(Lagfarge)
                music.rest(music.beat(BeatFraction.Half))
            }
            GoTime = true
        }
    } else if (receivedNumber == 2) {
        if (!(GoTime)) {
            bitbot.setLedColor(0x00FF00)
            GoTime = true
            basic.pause(500)
            bitbot.setLedColor(Lagfarge)
        }
    }
})
function Lys__B () {
    bitbot.setPixelColor(0, Retningfarge)
    bitbot.setPixelColor(1, Retningfarge)
    bitbot.setPixelColor(2, Retningfarge)
    bitbot.setPixelColor(3, Lagfarge)
    bitbot.setPixelColor(4, Lagfarge)
    bitbot.setPixelColor(5, Lagfarge)
    bitbot.setPixelColor(6, Retningfarge)
    bitbot.setPixelColor(7, Retningfarge)
    bitbot.setPixelColor(8, Retningfarge)
    bitbot.setPixelColor(9, Lagfarge)
    bitbot.setPixelColor(10, Lagfarge)
    bitbot.setPixelColor(11, Lagfarge)
}
function Lys__F () {
    bitbot.setPixelColor(0, Lagfarge)
    bitbot.setPixelColor(1, Lagfarge)
    bitbot.setPixelColor(2, Lagfarge)
    bitbot.setPixelColor(3, Retningfarge)
    bitbot.setPixelColor(4, Retningfarge)
    bitbot.setPixelColor(5, Retningfarge)
    bitbot.setPixelColor(6, Lagfarge)
    bitbot.setPixelColor(7, Lagfarge)
    bitbot.setPixelColor(8, Lagfarge)
    bitbot.setPixelColor(9, Retningfarge)
    bitbot.setPixelColor(10, Retningfarge)
    bitbot.setPixelColor(11, Retningfarge)
}
// Hvis en bil blir skrudd av midt i kampen kan dommeren skru på bilen og manuelt sette GoTime til sann
input.onButtonPressed(Button.AB, function () {
    bitbot.setLedColor(0x00FF00)
    basic.pause(500)
    bitbot.setLedColor(Lagfarge)
    GoTime = true
})
radio.onReceivedString(function (receivedString) {
    if (GoTime == true) {
        if (receivedString == "F") {
            Lys__F()
            bitbot.go(BBDirection.Forward, 50)
        } else if (receivedString == "B") {
            Lys__B()
            bitbot.go(BBDirection.Reverse, 50)
        } else if (receivedString == "V") {
            Lys__V()
            bitbot.rotate(BBRobotDirection.Left, 20)
        } else if (receivedString == "H") {
            Lys__H()
            bitbot.rotate(BBRobotDirection.Right, 20)
        } else {
            bitbot.setLedColor(Lagfarge)
            bitbot.stop(BBStopMode.Coast)
        }
    }
})
function Lys__H () {
    bitbot.setPixelColor(0, Lagfarge)
    bitbot.setPixelColor(1, Lagfarge)
    bitbot.setPixelColor(2, Lagfarge)
    bitbot.setPixelColor(3, Lagfarge)
    bitbot.setPixelColor(4, Lagfarge)
    bitbot.setPixelColor(5, Lagfarge)
    bitbot.setPixelColor(6, Retningfarge)
    bitbot.setPixelColor(7, Retningfarge)
    bitbot.setPixelColor(8, Retningfarge)
    bitbot.setPixelColor(9, Retningfarge)
    bitbot.setPixelColor(10, Retningfarge)
    bitbot.setPixelColor(11, Retningfarge)
}
function Lys__V () {
    bitbot.setPixelColor(0, Retningfarge)
    bitbot.setPixelColor(1, Retningfarge)
    bitbot.setPixelColor(2, Retningfarge)
    bitbot.setPixelColor(3, Retningfarge)
    bitbot.setPixelColor(4, Retningfarge)
    bitbot.setPixelColor(5, Retningfarge)
    bitbot.setPixelColor(6, Lagfarge)
    bitbot.setPixelColor(7, Lagfarge)
    bitbot.setPixelColor(8, Lagfarge)
    bitbot.setPixelColor(9, Lagfarge)
    bitbot.setPixelColor(10, Lagfarge)
    bitbot.setPixelColor(11, Lagfarge)
}
let Retningfarge = 0
let Lagfarge = 0
let GoTime = false
let Lag = 1
let Draktnummer = 1
GoTime = false
radio.setGroup(100 * Lag + Draktnummer)
if (Lag == 1) {
    Lagfarge = 0x0000FF
} else if (Lag == 2) {
    Lagfarge = 0xFF0000
}
bitbot.setLedColor(Lagfarge)
Retningfarge = 0xFFFFFF
basic.showNumber(Draktnummer)
