const express = require('express')
const server = express()

server.get('/', (req, res) => {
    return res.send('Hi!')
})

server.listen(5000, () => {
    console.log('server is running')
})
