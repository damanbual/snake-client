
// Import the connect function from client module
const { connect } = require("./client");

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Register an event listener for "data" event
  stdin.on("data", handleUserInput);
  
  return stdin;
};
