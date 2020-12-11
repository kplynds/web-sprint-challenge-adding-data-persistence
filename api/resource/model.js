const db = require('../../data/dbConfig');

function find() {
    return db('resources')
}

function add(resource) {
    return db('resources').insert(resource)
}

module.exports = {
    find,
    add
}
