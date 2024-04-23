const express = require('express');
const app = express();
//getting http module
const http = require('http');
//creating a http server and passing express as a request handler
const server = http.createServer(app);
const path = require('path');
const socketio = require('socket.io');
const io = socketio(server);


app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log(`Someone got connected with the id - ${socket.id}`)
})



const port = 3000;
server.listen(port, () => {
    console.log(`Express server started at port: ${port}`);
})