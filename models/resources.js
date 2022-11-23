import {pool} from "../db/index.js"

export async function getResources(){
    const data = await pool.query("SELECT * FROM resources;");
    return data.rows
}

// POST REQUEST

export async function createResource(){

    await pool.query(`INSERT INTO resources (title, link, difficulty, category_1, category_2, format, estimated_time, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`, [resources.title, resources.link, resources.difficulty, resources.category_1, resources.category_2, resources.format, resources.estimated_time, resources.user_id])

    return data.rows
}
