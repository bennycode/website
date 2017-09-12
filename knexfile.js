module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './temp/development.db3'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/main/migrations'
    },
    seeds: {
      directory: './src/main/seeds'
    },
    useNullAsDefault: true,
  },
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`,
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/main/migrations'
    },
    pool: {
      min: 2,
      max: 10
    }
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: './temp/test.db3'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/main/migrations'
    },
    seeds: {
      directory: './src/main/seeds'
    },
    useNullAsDefault: true,
  }
};
