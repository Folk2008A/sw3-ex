namespace SW3 {
    /**
     * Runs the motor at the given speed
     */

    //% block="motor_1 run at $speed motor_2 run at $speed2"
    //% speed.shadow="speedPicker"
    //% speed2.shadow="speedPicker"
    export function run(speed: number, speed2: number) {
        if (speed < 0 && speed2 < 0) {
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.digitalWritePin(DigitalPin.P15, 1)
        } else if (speed > 0 && speed2 > 0) {
            pins.digitalWritePin(DigitalPin.P12, 1)
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P14, 1)
            pins.digitalWritePin(DigitalPin.P15, 0)
        }
        pins.analogWritePin(AnalogPin.P8, speed)
        pins.analogWritePin(AnalogPin.P16, speed2)
    }
}