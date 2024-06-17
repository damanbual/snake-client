
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
  // Special keys for chat messages
    // (Feel free to customize these messages)
  case '1':
    connection.write('Say: Go Long - Snake Joke');
    break;
  case '2':
    connection.write('Say: Watch Out!');
    break;
  case '3':
    connection.write('Say: Nice Move!');
    break;
  case '4':
    connection.write('Say: Oops!');
    break;
  case '5':
    connection.write('Say: GG!');
    break;
  }
};

// Export setupInput function to be used in other files
module.exports = { setupInput };