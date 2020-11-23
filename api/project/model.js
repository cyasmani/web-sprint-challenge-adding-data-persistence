// build your `Project` model here
const db = require('../../data/dbConfig')

function getProjects() {
    return db('projects')
}

function postProject(project) {
    try {
        const ids = await db('projects').insert(project)
        const newProject = await findById(ids[0])
        return newProject
    } catch(err) {
        throw err
    }

}

module.exports = {getProjects, postProject}