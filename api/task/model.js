// build your `Task` model here
const db = require('../../data/dbConfig')

function postTask(task) {
    try {
        const ids = await db('tasks').insert(task)
        const newTask = await findById(ids[0])
        return newTask
    } catch(err) {
        throw err
    }
}

module.exports = {postTask}