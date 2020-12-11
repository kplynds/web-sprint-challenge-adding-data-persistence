
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { project_id: 1, task_description: "do the thing." },
        { project_id: 2, task_description: "do the first thing.", task_notes: 'make sure you have pencils!' },
      ]);
    });
};
