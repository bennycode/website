exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTableIfNotExists('languages', (table) => {
      table.increments('id').primary().unsigned();
      table.string('code').notNullable();
    }),
    knex.schema.createTableIfNotExists('providers', (table) => {
      table.increments('id').primary().unsigned();
      table.string('name').notNullable();
    }),
    knex.schema.createTableIfNotExists('playlists', (table) => {
      table.increments('id').primary().unsigned();
      table.timestamp('created_at').notNullable().defaultTo('2013-12-31 12:17:10.0');
      table.timestamp('updated_at').notNullable().defaultTo('2013-12-31 12:17:10.0');

      table.integer('provider_id').unsigned().references('providers.id');
      table.string('code');

      table.integer('category_id').unsigned().references('categories.id');
      table.integer('language_id').unsigned().references('languages.id');

      table.string('name');
      table.string('slug');
      table.string('description');
      table.boolean('enabled').notNullable().defaultTo(false);
    }),
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTableIfExists('languages'),
    knex.schema.dropTableIfExists('providers'),
    knex.schema.dropTableIfExists('playlists'),
  ]);
};
