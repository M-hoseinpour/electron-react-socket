/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
const net = require('net');

const server = net.createServer();

let price = '130000000';

server.on('connection', (socket) => {
  console.log('client connected');
  socket.on('data', (data) => {
    if (data.toString() === 'auctionPrice') {
      console.log('auction price sent')
      socket.write(price);
    } else {
      console.log('new price sent')
      socket.write(data.toString());
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
