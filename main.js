'use strict'

const PORT = 3000;

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.listen(3000, () => {
    console.log(`Server start up on port: ${PORT}`)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/html/index.html')
    console.log('New connection ' + new Date())
})


app.use('/js/index.js', (req, res) => {
    res.sendFile(__dirname + '/src/js/index.js')
})

app.use('/L.jpeg', (req, res) => {
    res.sendFile(__dirname + '/src/img/L.jpeg')
})

app.use('/shit.png', (req, res) => {
    res.sendFile(__dirname + '/src/img/shit1.png')
})

app.use(bodyParser.json())

app.post('/', (req, res) => {
    console.log(req.body)
    console.log(req.headers)
    // res.end(JSON.stringify(req.body))
    res.end("kek")
})

// io.on('connection', socket => {
//
//     console.log('connection')
//
//     socket.on('offer', (offer) => {
//         socket.emit('answer', 'data')
//         console.log('offer');
//     });
//
//     socket.on('answer', (answer, id) => {
//         console.log('answer')
//     });
//
//     socket.on('disconnect', () => {
//         console.log('disconnect')
//     });
//
// });
