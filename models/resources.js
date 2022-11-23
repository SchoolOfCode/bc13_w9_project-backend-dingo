import {pool} from "../db/index.js"

// GET ALL RESCOUCES
export async function getResources(){
    const data = await pool.query("SELECT * FROM resources;");
    return data.rows
}

// GET RESOURCE BY FORMAT
export async function getByFormat(format){
    const data = await pool.query(`SELECT * FROM resources WHERE format = $1`,
    [format]);
    return data.rows;

}

// POST NEW RESOURCE

export async function createResource(resources){

    await pool.query(`INSERT INTO resources (title, link, difficulty, category_1, category_2, format, estimated_time, author) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
     [resources.title, resources.link, resources.difficulty, resources.category_1, resources.category_2, resources.format, resources.estimated_time, resources.author]);
const result = await pool.query(`SELECT * FROM resources`);
const resultResource = result.rows;
return resultResource[resultResource.length -1];
   
}
