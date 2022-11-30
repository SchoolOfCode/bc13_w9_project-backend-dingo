
/**
 * 1 POOL => Open up connection pool using pg
 * 2 pulling down enviromental vaiable from process.env
 * 3 Throws error when database URL incorrect 
 * 4 opens new connection pool without having to reverify security 
 */
//1
import pg from "pg";
//2
const databaseUrl = process.env.POSTGRES_CONNECTION_URL;
if (databaseUrl === undefined) {
  //3
  throw new Error(
    "This project requires a database url. Did you forget to create a .env file? Please ensure a .env file exists and that it contains a DATABASE_URL variable."
  );
}
//4
export const pool = new pg.Pool({
  connectionString: databaseUrl,
});

