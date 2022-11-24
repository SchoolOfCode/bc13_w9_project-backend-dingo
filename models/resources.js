import { pool } from "../db/index.js";

// GET ALL RESCOUCES
export async function getResources() {
  // translates SQL to get information from database
  const data = await pool.query("SELECT * FROM resources;");
  return data.rows;
}

// GET RESOURCE BY FORMAT
export async function getByFormat(format) {
  //placeholder used to protect data
  const data = await pool.query(
    `SELECT * FROM resources WHERE format = $1`,
    //prepared statement
    [format]
  );
  return data.rows;
}

// POST NEW RESOURCE
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
