input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    index = true
    Status_LED()
})
function Status_LED () {
    if (index == true) {
        basic.setLedColor(0x00ff00)
    } else if (index == false) {
        basic.setLedColor(0xff0000)
    }
}
function sound () {
    for (let index2 = 0; index2 < 4; index2++) {
        music.playTone(784, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    }
}
let index = false
calliBot2.servo(C2Servo.Servo2, 0)
index = false
Status_LED()
basic.forever(function () {
    while (index == true) {
        Status_LED()
        basic.pause(1000)
        if (calliBot2.entfernung(C2Einheit.cm) <= 13) {
            calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
            basic.pause(1000)
            calliBot2.servo(C2Servo.Servo2, 90)
            calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
            basic.pause(1000)
            calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 30)
            basic.pause(300)
            calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
            basic.pause(200)
            calliBot2.servo(C2Servo.Servo2, 70)
            basic.pause(500)
            calliBot2.servo(C2Servo.Servo2, 45)
            basic.pause(500)
            calliBot2.servo(C2Servo.Servo2, 15)
            basic.pause(500)
            calliBot2.servo(C2Servo.Servo2, 0)
            basic.pause(500)
            calliBot2.motor(C2Motor.beide, C2Dir.rueckwaerts, 30)
            sound()
            basic.pause(500)
            music.stopAllSounds()
            calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
            basic.pause(500)
            calliBot2.motor(C2Motor.rechts, C2Dir.rueckwaerts, 30)
            calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, 30)
            basic.pause(1000)
            calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 50)
            basic.pause(1000)
            calliBot2.servo(C2Servo.Servo2, 90)
            basic.pause(500)
            calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
            basic.pause(500)
            calliBot2.motor(C2Motor.beide, C2Dir.rueckwaerts, 100)
            basic.pause(500)
            calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
            basic.pause(500)
            calliBot2.servo(C2Servo.Servo2, 0)
            index = false
            Status_LED()
        } else {
            calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 30)
        }
    }
})
