const db = require("../../data/dbConfig")

function find() {
  return db("tasks")
    .join('projects', 'projects.project_id', 'tasks.project_id')
    .select('project_name', 'project_description', 'tasks.task_description', 'tasks.task_completed', 'tasks.task_notes')
}

function add(task) {
  return db("tasks").insert(task).then(([id]) => {
    return db("tasks").where("task_id", id).first()
  })
}

module.exports = {
  find,
  add
}
