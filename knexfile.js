module.exports = {
  development: {
    // complete your knexfile
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './projects.sqlite3'
      
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: './seeds'
    }
    //     pool: {
    //   afterCreate: (conn, done) => {
    //     // runs after a connection is made to the sqlite engine
    //     conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
    //   },
    // }

  },
};
