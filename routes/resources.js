import { Router } from "express";
import {getResources} from "../models/resources.js"

// set up simple get request to return all resources

const router = Router()

router.get("/", async function (req, res) {

    const resources = await getResources();
    res.json({success: true, payload: resources})
})

export default router;