import {
  Board,
  Led
} from "johnny-five";

const board = Board();
let toggleState = false;

board.on("ready", function () {
  console.log("Board ready!");
  var led = new Led(13); //initialize the led on the 13 port

  setInterval(toggleLed, 1000); //call every second!

  const toggleLed = () => {
    toggleState = !toggleState;
    return toggleState ? led.on() : led.off();
  }
});