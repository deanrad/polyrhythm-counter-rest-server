const { trigger, listen: on } = require("polyrhythm");

const initialState = { count: 0 };
const state = initialState;

on("tick", () => {
  state.count += 1;
  console.log(`Ticked ${state.count} times so far! 🤯`);
});

const intervalId = setInterval(() => {
  trigger("tick");
  state.count >= 50 && clearInterval(intervalId);
}, 2000);
// Run an endpoint
var http = require("http");
http
  .createServer(function(req, res) {
    res.write(`The count is currently ${state.count}`); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
