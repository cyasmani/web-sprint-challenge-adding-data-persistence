// build your `Resource` model here

const db = require('../../data/dbConfig')


function getResources() {
    return db('Resources')
}

function postResource(resource) {
    try {
        const ids = db('resources').insert(resource)
        const newResource = findById(ids[0])
        return newResource
    } catch(err) {
        throw err
    }
}

module.exports = {getResources, postResource}