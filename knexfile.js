// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://postgres:anone@127.0.0.1/global_forum'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
};
