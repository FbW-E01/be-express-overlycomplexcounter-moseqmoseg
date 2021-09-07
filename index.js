import express from 'express';
const app = express()
let counter = 0
const port = 3000
const server = app.listen(3000, () => console.log('Running…'));

app.get('/', (req, res) => {
    res.send(counter.toString())
});

app.post('/inc', (req, res) => {
    res.send((++counter).toString())
});

app.post('/dec', (req, res) => {
    res.send((--counter).toString())
});

app.post('/die', (req, res) => {
    res.send(server.close())
});

// app.listen(port, () => {
//     console.log("Example app listening on http://localhost:3000");
// });

server;