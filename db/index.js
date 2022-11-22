// Open up connection pool using pg

const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_URL,
});



// And set way of making SQL queries from the app
// ❓ Can we do module.exports if we're using ES6?

module.exports = {
  query: function (text, params) {
    return pool.query(text, params);
  },
};



