// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const info = require('./model.js')

router.post('/', (req, res) => {
    info.postProject(req.body)
    .then(updated => {
        res.status(200).json(updated)
    })
    .catch(error => {
        console.log(error)
    })
})

router.get('/', (req, res) => {
    info.getProjects()
    .then(updated => {
        res.status(200).json(updated)
    })
    .catch(error => {
        console.log(error)
    })

})

module.exports = router

