
const net = require("net");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection(
    {
      host: "localhost", // IP address here
      port: 50541, // PORT number here
    },
    () => {
      // 'connect' listener
      console.log("Successfully connected to game server");
      conn.write("Name: DSB"); // Send the client's name to the server

      // Commented out the Move: up message
      // conn.write('Move: up');
      console.log('Connection established');
    }
  );

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Handle incoming data from the server
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};

module.exports = { connect };
