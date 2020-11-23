
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {projectname: 'Create a webpage', taskID:2, resourceID:1},
        {projectname: 'Create a webpage', taskID:3, resourceID:2},
        {projectname: 'paint a room', taskID:1, resourceID:1 },
        {projectname: 'paint a room', taskID: 4, resourceID: 3},
      ]);
    });
};
