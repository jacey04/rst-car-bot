let distance = 0
function sonar1 () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P0, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P0, 0)
    distance = pins.pulseIn(DigitalPin.P1, PulseValue.High) / 58
}
basic.forever(function () {
	
})
