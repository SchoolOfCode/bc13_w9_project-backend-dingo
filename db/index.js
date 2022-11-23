// Open up connection pool using pg

import pg from "pg";
const databaseUrl = process.env.POSTGRES_CONNECTION_URL;
if (undefined === databaseUrl) {
  throw new Error(
    "This project requires a database url. Did you forget to create a .env file? Please ensure a .env file exists and that it contains a DATABASE_URL variable."
  );
}
export const pool = new pg.Pool({
  connectionString: databaseUrl,
});


// And set way of making SQL queries from the app

function query (text, params) {
  console.log("Text:", text, "params:", params)
  return pool.query(text, params);
}

export {query}