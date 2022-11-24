import { Router } from "express";
import {
  getResources,
  createResource,
  getByFormat,
} from "../models/resources.js";

// set up simple get request to return all resources

const router = Router();

router.get("/", async function (req, res){
    if (req.query.format !== undefined) {
     const resourceFormat = await getByFormat(req.query.format)
     return res.status(200).json({success:true, payload: resourceFormat})
    }

    const resources = await getResources();
    res.status(200).json({success: true, payload: resources})
});

router.post("/", async function (req, res){
    const data = req.body
    const newResource = await createResource(data)
    res.status(200).json({success: true, payload: newResource})
})

export default router;
