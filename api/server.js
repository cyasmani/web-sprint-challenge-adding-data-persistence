// build your server here
const express = require('express')
const server = express()

server.get('/', (req,res) => {
    res.send("Server is active and running yall")
})

module.exports = server;