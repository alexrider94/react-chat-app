import express from 'express';
import cors from 'cors';
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

const http = require('http').Server(app);
const io = require('socket.io')(http);
http.listen(port, () => { console.log(`Listening on port ${port}`)})
//http.createServer() VS app.listen()
//https://stackoverflow.com/questions/17696801/express-js-app-listen-vs-server-listen


// app.listen(8883,()=>{
//     console.log(`Server on http://localhost:8883`);
// })

io.on("connection",()=>{
    console.log(`connected with client by socketIO`);
})
