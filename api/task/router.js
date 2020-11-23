// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()
const info = require('./model.js')

router.post('/', (req, res) => {
    info.postTask(req.body)
    .then(updated => {
        res.status(200).json(updated)
    })
    .catch(error => {
        console.log(error)
    })
})

module.exports = router