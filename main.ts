input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
    basic.showString("A")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("C")
    basic.showString("C")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
    basic.showString("B")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("D")
    basic.showString("D")
})
radio.setGroup(1)
radio.setTransmitSerialNumber(true)
basic.forever(function () {
	
})
