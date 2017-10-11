exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.alterTable('categories', (table) => {
      table.timestamp('created_at').notNullable().defaultTo('2013-12-31 12:17:10.0');
      table.timestamp('updated_at').notNullable().defaultTo('2013-12-31 12:17:10.0')
    }),
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.alterTable('categories', (table) => table.dropColumns('created_at', 'updated_at')),
  ]);
};
