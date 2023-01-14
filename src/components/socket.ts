/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
// import net from 'net';

// import { connectToServer } from "main/main";

// /* Instance socket on create window */
// // let socketClient: net.Socket;

// export const connectToServer = () => {
//   const socketClient = net.connect({ host: '127.0.0.1', port: 4545 }, () => {
//     // 'connect' listener
//     console.log('connected to server!');
//     socketClient.write('data sended hoooraaa');
//   });
// };
// try {
//   console.log('Try to connect');

//   socketClient.on('data', (data) => {
//     console.log(data.toString());
//     const person = JSON.parse(data.toString());

//     console.log('Hello ' + person + '!');
//   });
//   socketClient.on('end', () => {
//     console.log('disconnected from server');
//   });
// } catch (error) {
//   console.log(error);
// }

