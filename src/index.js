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
const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "../public")));
app.get("/", function(req, res) {
  res.write(`The count is ...`);
  res.end(); //end the response
});
app.listen(8080);
