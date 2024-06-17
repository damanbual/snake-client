
let connection;

// Function to set up the input interface
const setupInput = function (conn) {
  connection = conn;
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

  // Send movement commands to the server for specific key presses
  switch (key) {
  case 'w':
    connection.write('Move: up');
    break;
  case 'a':
    connection.write('Move: left');
    break;
  case 's':
    connection.write('Move: down');
    break;
  case 'd':
    connection.write('Move: right');
    break;
  }
};

// Export setupInput function to be used in other files
module.exports = { setupInput };