
const net = require("net");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection(
    {
      host: IP, // Use the IP constant
      port: PORT, // Use the PORT constant
    },
    () => {
      // 'connect' listener
      console.log("Successfully connected to game server");
      conn.write("Name: DSB"); // Send the client's name to the server

      // Commented out the Move: up message
      // conn.write('Move: up');
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
