// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: "postgres://postgres:123456@localhost:5432/fs-forum",
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
  },
};
