
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_name: "pencils", resource_description: "number 2 and sharpened!"},
        { resource_name: "erasers" },
      ]);
    });
};
