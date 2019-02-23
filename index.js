const five = require("johnny-five");
const board = new five.Board();
const play = require('./lib/play')

let triggered = false

function main () {
    var mic = new five.Sensor("A0");
    var led = new five.Led(13);

    mic.on('data', async e => {
        if (triggered)
            return
        if (e > 200) {
            console.log(e)
            triggered = true;
            led.on()
            var p = play(() => triggered = false)
        }
    })
}

board.on("ready", main);