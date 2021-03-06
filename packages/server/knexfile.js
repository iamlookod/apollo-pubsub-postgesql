module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: process.env.DBHOST,
      database: process.env.DB,
      user: process.env.DBUSER,
      password: process.env.DBPASSWORD
    },
    pool: { min: 0, max: 30, acquireTimeoutMillis: 300 * 1000 },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      host: process.env.DBHOST,
      database: process.env.DB,
      user: process.env.DBUSER,
      password: process.env.DBPASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      host: process.env.DBHOST,
      database: process.env.DB,
      user: process.env.DBUSER,
      password: process.env.DBPASSWORD,
      ssl: true
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
