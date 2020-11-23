
exports.up = function(knex) {
  return knex.schema
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description')
        .notNullable()
        tbl.string('notes')
        tbl.boolean('completed')
        .notNullable()
        .defaultTo('false')
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name')
        .notNullable()
        .unique()
        tbl.string('description')
    })
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('projectname')
        .notNullable()
        tbl.string('description')
        tbl.boolean('completed')
        .notNullable()
        .defaultTo('false')
        tbl.integer('taskID')
        .unsigned()
        .notNullable()
        tbl.integer('resourceID')
        .unsigned()
        .notNullable()
    })

  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
};
