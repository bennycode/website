const development = {
  client: 'sqlite3',
  connection: {
    filename: './temp/development.db3'
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/main/migrations'
  },
  seeds: {
    directory: './src/test/seeds'
  },
  useNullAsDefault: true,
};

const test = Object.assign(development, {
  connection: {
    filename: './temp/test.db3'
  }
});

const production = {
  client: 'pg',
  connection: `${process.env.DATABASE_URL}?ssl=true`,
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/main/migrations'
  },
  pool: {
    min: 2,
    max: 5
  },
  seeds: {
    directory: './src/main/seeds'
  },
};

module.exports = {
  development,
  production,
  test
};
