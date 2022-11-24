// Open up connection pool using pg

import pg from "pg";
//pulling down enviromental vaiable from process.env
const databaseUrl = process.env.POSTGRES_CONNECTION_URL;
if (undefined === databaseUrl) {
  //Throws error when database URL incorrect 
  throw new Error(
    "This project requires a database url. Did you forget to create a .env file? Please ensure a .env file exists and that it contains a DATABASE_URL variable."
  );
}
//opens new connection pool without having to reverify security 
export const pool = new pg.Pool({
  connectionString: databaseUrl,
});


// And set way of making SQL queries from the app
//ES6 way of exporting queries

function query (text, params) {
  console.log("Text:", text, "params:", params)
  return pool.query(text, params);
}

export {query}