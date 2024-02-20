def on_button_a():
    calliBot2.servo(C2Servo.SERVO2, 45)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    calliBot2.servo(C2Servo.SERVO2, 90)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

calliBot2.servo(C2Servo.SERVO2, 0)

def on_forever():
    for index in range(1):
        basic.pause(1000)
        if calliBot2.entfernung(C2Einheit.CM) <= 10:
            calliBot2.motor_stop(C2Motor.BEIDE, C2Stop.BREMSEN)
            basic.pause(500)
            calliBot2.servo(C2Servo.SERVO2, 90)
            basic.pause(500)
            calliBot2.motor(C2Motor.BEIDE, C2Dir.VORWAERTS, 20)
            basic.pause(500)
            calliBot2.servo(C2Servo.SERVO2, 45)
            basic.pause(500)
            calliBot2.servo(C2Servo.SERVO2, 0)
            basic.pause(500)
            calliBot2.motor(C2Motor.BEIDE, C2Dir.RUECKWAERTS, 30)
            basic.pause(2000)
            calliBot2.motor_stop(C2Motor.BEIDE, C2Stop.BREMSEN)
            basic.pause(500)
            calliBot2.motor(C2Motor.RECHTS, C2Dir.RUECKWAERTS, 50)
            calliBot2.motor(C2Motor.LINKS, C2Dir.VORWAERTS, 50)
            basic.pause(800)
            calliBot2.motor(C2Motor.BEIDE, C2Dir.VORWAERTS, 50)
            basic.pause(1000)
            calliBot2.servo(C2Servo.SERVO2, 90)
            basic.pause(500)
            calliBot2.motor_stop(C2Motor.BEIDE, C2Stop.BREMSEN)
            basic.pause(200)
            calliBot2.motor(C2Motor.BEIDE, C2Dir.RUECKWAERTS, 100)
            basic.pause(500)
            calliBot2.motor_stop(C2Motor.BEIDE, C2Stop.BREMSEN)
        else:
            calliBot2.motor(C2Motor.BEIDE, C2Dir.VORWAERTS, 50)
basic.forever(on_forever)
