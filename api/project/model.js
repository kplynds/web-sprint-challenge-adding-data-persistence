const db = require('../../data/dbConfig');

function find() {
    return db('projects')
}

function add(project) {
    return db('projects').insert(project)
}

module.exports = {
    find,
    add
}
