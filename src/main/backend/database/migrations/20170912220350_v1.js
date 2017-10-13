exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTableIfNotExists('categories', (table) => {
      table.increments('id').primary().unsigned();
      table.string('color').notNullable();
      table.string('name').notNullable();
    }),
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTableIfExists('categories'),
  ]);
};
