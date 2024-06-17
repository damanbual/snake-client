
// Function to set up the input interface
const setupInput = function () {
  const stdin = process.stdin; 
  stdin.setRawMode(true); 
  stdin.setEncoding("utf8"); 
  stdin.resume(); 
  
  // Registering an event listener to handle key presses
  stdin.on("data", handleUserInput);
  return stdin;
};

// Function to handle key presses
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};

// Export setupInput function to be used in other files
module.exports = { setupInput };