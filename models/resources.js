import { pool } from "../db/index.js";


/**
 * GET ALL RESOURCES
 * @returns all data from resource table using SQL query
 * pool.query translates SQL query to get information from database
 */
export async function getResources() {
  const data = await pool.query("SELECT * FROM resources;");
  return data.rows;
}
/**
 * GET RESOURCE BY FORMAT
 * @param {string} format -video, article, course
 * @returns all data with the selected format
 * $1 placeholder used to protect data for prepared statement
 */
export async function getByFormat(format) {
  const data = await pool.query(
    `SELECT * FROM resources WHERE format = $1`,
    [format]
  );
  return data.rows;
}


/**
 * POST NEW RESOURCE
 * @param {object} resources - title, link, difficulty, category, format, estimated_time, author
 * updated the SQL with informtaion that was recently added 
 * @returns {object} the object that you just posted
 * $1, $2, $3, $4, $5, $6, $7 placeholders for 
 * resources.title, resources.link, resources.difficulty, resources.category, resources.format, resources.estimated_time, resources.author,
 */
export async function createResource(resources) {
  await pool.query(
    `INSERT INTO resources (title, link, difficulty, category, format, estimated_time, author) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [
      resources.title,
      resources.link,
      resources.difficulty,
      resources.category,
      resources.format,
      resources.estimated_time,
      resources.author,
    ]
  );
  const result = await pool.query(`SELECT * FROM resources`);
  const resultResource = result.rows;
  return resultResource[resultResource.length - 1];
}
