
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'brain'},
        {id: 2, name: 'computer'},
        {id: 3, name: 'paintbrush'}
      ]);
    });
};
