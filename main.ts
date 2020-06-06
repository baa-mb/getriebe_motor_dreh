input.onButtonPressed(Button.A, function () {
    leistung += 0
})
input.onButtonPressed(Button.AB, function () {
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, 30)
})
input.onButtonPressed(Button.B, function () {
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
    leistung = 20
})
let leistung = 0
basic.showIcon(IconNames.Heart)
leistung = 0
basic.forever(function () {
    leistung += 10
    leistung = leistung % 70
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, leistung)
    basic.showNumber(leistung / 10)
    basic.pause(10000)
})
