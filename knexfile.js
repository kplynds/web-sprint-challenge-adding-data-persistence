module.exports = {
  development: {
    // complete your knexfile
    client: "sqlite3",
    connection: {
      filename: "./data/projects.db3",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    useNullAsDefault: true,
  },
};
