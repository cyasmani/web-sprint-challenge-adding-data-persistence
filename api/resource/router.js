// build your `/api/resources` router here

const express = require('express')
const router = express.Router()
const info = require('./model.js')

router.post('/', (req, res) => {
    info.postResource(req.body)
    .then(updated => {
        res.status(200).json(updated)
    })
    .catch(error => {
        console.log(error)
    })
})

router.get('/', (req, res) => {
    info.getResources()
    .then(updated => {
        res.status(200).json(updated)
    })
    .catch(error => {
        console.log(error)
    })

})

module.exports = router