
exports.up = function(knex) {
  return knex.schema.createTable('projects', (tbl) => {
      tbl.increments('project_id')
      tbl.string('project_name', 128).notNullable();
      tbl.string('project_description', 500);
      tbl.boolean('project_completed').notNullable().defaultTo(false);
  })
  .createTable('resources', (tbl) => {
      tbl.increments('resource_id')
      tbl.string('resource_name', 128).notNullable().unique()
      tbl.string('resource_description', 500);
  })
  .createTable('tasks', (tbl) => {
      tbl.increments('task_id')
      tbl.integer('project_id').unsigned().notNullable().references('project_id').inTable('projects').onDelete("RESTRICT")
      .onUpdate("RESTRICT")
      tbl.string('task_description', 500).notNullable()
      tbl.string('task_notes', 500)
      tbl.boolean('task_completed').notNullable().defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
