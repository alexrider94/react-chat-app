import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
const app = express();

//http.createServer() VS app.listen()
//https://stackoverflow.com/questions/17696801/express-js-app-listen-vs-server-listen

const httpServer = http.createServer(app).listen(8883,()=>{
    console.log(`Server on http://localhost:8883`);
})
// app.listen(8883,()=>{
//     console.log(`Server on http://localhost:8883`);
// })
const socketServer = socketIO(httpServer);
socketServer.on("connection",()=>{
    console.log(`connected with client by socketIO`);
})
