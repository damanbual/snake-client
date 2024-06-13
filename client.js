
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
      conn.write("Name: DB"); // Send the client's name to the server
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
