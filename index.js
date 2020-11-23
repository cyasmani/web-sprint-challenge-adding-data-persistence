// start your server here
const express = require('express')
const server = require('./api/server')
const resourceRouter = require('./api/resource/router')




server.use('/api/resource', resourceRouter)

const port = 5000;

server.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`)
})


