import {pool} from "../../db/index.js"

export async function getResources(){
    const data = await pool.query("SELECT * FROM resources;");
    return data.rows
}

