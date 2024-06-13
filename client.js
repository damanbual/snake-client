
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here
    port: 50541, // PORT number here
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  // Handle incoming data from the server
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });
  
  // Handle connection event
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });
  
  return conn;
};

// Export the connect function
module.exports = { connect };
