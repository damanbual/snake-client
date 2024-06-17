
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

      //  Experiment: Send multiple move commands with delays
      setTimeout(() => conn.write('Move: up'), 50);
      setTimeout(() => conn.write('Move: right'), 100);
      setTimeout(() => conn.write('Move: down'), 150);
      setTimeout(() => conn.write('Move: left'), 200);
      
      console.log('Sent multiple move commands to server with delays');
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
