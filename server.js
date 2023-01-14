/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
const net = require("net");

const server = net.createServer();

server.on("connection", (socket) => {
  console.log("client connected");
  socket.on("data", (data) => {
    console.log("Received data: ", data.toString());
    socket.write("price from server");
  });
});

server.listen(
  {
    host: "127.0.0.1",
    port: 4545,
  },
  () => console.log("started server ...")
);
