
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

// Function to handle user input from stdin
const handleUserInput = function (key) {
  // Check for `ctrl + c` which sends a `\u0003` character
  if (key === '\u0003') {
    process.exit(); // Exits the program if ctrl + c is pressed
  }
};
setupInput(); // Call the setupInput function to start listening for keyboard input
