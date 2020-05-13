'use strict'

const PORT = 3000;

const server = require('http').createServer((req, res) => {
    res.end('Socket-server is running');
});

const io = require('socket.io')(server);
server.listen(PORT);

io.on('connection', socket => {

    console.log('connection')

    socket.on('offer', (offer) => {
        socket.emit('answer', 'data')
        console.log('offer');
    });

    socket.on('answer', (answer, id) => {
        console.log('answer')
    });

    socket.on('disconnect', () => {
        console.log('disconnect')
    });

});
