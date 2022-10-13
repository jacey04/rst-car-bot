input.onButtonPressed(Button.A, function () {
    forward()
})
function backward () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    control.waitMicros(20000)
}
input.onButtonPressed(Button.B, function () {
    backward()
})
function forward () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    control.waitMicros(20000)
}
function sensor () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
}
let distance = 0
basic.showIcon(IconNames.Tortoise)
distance = 0
basic.forever(function () {
	
})
