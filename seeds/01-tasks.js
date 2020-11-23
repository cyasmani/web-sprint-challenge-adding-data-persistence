
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Dip paintbrush in paint'},
        {id: 2, description: 'Go on visual studio code'},
        {id: 3, description: 'begin coding in html and css'},
        {id: 4, description: 'begin painting room'}
      ]);
    });
};
