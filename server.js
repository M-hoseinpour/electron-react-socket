/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
const net = require('net');

const server = net.createServer();
let sockets = [];

let price = '130000000';

server.on('connection', (socket) => {
  console.log('client connected');
  sockets.push(socket);
  socket.on('data', (data) => {
    if (data.toString() === 'auctionPrice') {
      console.log('auction price sent');
      socket.write(price);
      // socket.pipe(socket);
    } else {
      console.log('new price sent : ', data.toString());
      sockets.forEach((s) => {
        s.write(data.toString());
      });
      // socket.write(data.toString());
      // socket.pipe(socket);
    }
  });
});

server.listen(
  {
    host: '127.0.0.1',
    port: 4545,
  },
  () => console.log('started server ...')
);
