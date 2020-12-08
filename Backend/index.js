const express = require('express');
const cors = require('cors');
const httpServer = require('http');

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true
}
const port = 8883
const app = express();
app.use(cors(corsOptions));
// const server = http.Server(app);
// server.listen(port, () => {
//     console.log(`Listening on port ${port}`)})

const http = httpServer.Server(app);
const io = require('socket.io')(http);
http.listen(port, () => { console.log(`Listening on port ${port}`) })
//http.createServer() VS app.listen()
//https://stackoverflow.com/questions/17696801/express-js-app-listen-vs-server-listen


// app.listen(8883,()=>{
//     console.log(`Server on http://localhost:8883`);
// })

io.on("connection", (socket) => {
    console.log(`connected with client by socketIO`);

    io.to(socket.id).emit('my socket id', { socketId: socket.id });

    socket.on('enter chatroom', () => {
        console.log("누군가 입장함");
        socket.broadcast.emit('receive chat', { type: "alert", chat: "누군가가 입장하였습니다.", regDate: Date.now() });
    })

    socket.on('send chat', data => {
        console.log(`${socket.id} : ${data.chat}`);
        io.emit('recieve chat', data);
    })

    socket.on('leave chatroom', data => {
        console.log('leave chatroom', data);
        socket.broadcast.emit('recieve chat', { type: "alert", chat: "누군가가 퇴장하였습니다.", regDate: Date.now() })
    })
})
