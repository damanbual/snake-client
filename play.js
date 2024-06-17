
// Import the connect function from client module

const { connect } = require("./client"); // Import the connect function from client.js
const { setupInput } = require("./input"); // Import the setupInput function from input.js

console.log("Connecting ...");
connect(); // Establish connection to the server

setupInput(); // Start listening for keyboard inputs