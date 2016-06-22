
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments();
      table.string('username', 15).notNullable();
      table.string('email', 254).notNullable();
      table.string('password', 254).nullable();
      table.boolean('active').notNullable().defaultTo(true);
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  
};
