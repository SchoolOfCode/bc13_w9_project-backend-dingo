import { Router } from "express";
import {
  getResources,
  createResource,
  getByFormat,
} from "../models/resources.js";

// set up simple get request to return all resources

export const router = Router();

router.get("/", 
/**
 * GET ALL RESOURCES/GET RESOURCES BY FORMAT
 * @param {string} req sends a request for the data
 * @param {string} res responds with the data
 * @returns object { "success": true, "payload": [ array of objects for the same format if format is specified; otherwise the whole database is returned]}
 */
async function (req, res){
    if (req.query.format !== undefined) {
     const resourceFormat = await getByFormat(req.query.format)
     return res.status(200).json({success:true, payload: resourceFormat})
    }

    const resources = await getResources();
    res.status(200).json({success: true, payload: resources})
});

router.post("/",
/**
 * POST A NEW RESOURCE
 * @param {string} req sends a request to POST the data
 * @param {string} res responds with the posted data object
 * adds the new resourse to the array of objects
 */
async function (req, res){
    const data = req.body
    const newResource = await createResource(data)
    res.status(200).json({success: true, payload: newResource})
})

