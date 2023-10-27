import { Request, Response } from 'express';

import { Job } from '../../../models/index.js';
import { log } from '../../../utils/logger.js';


const controllerName = "updateController"
//foo
const group = "Job"

const Unit = async (req: Request, res: Response) =>{
    try {
        //request parameters
        log(`${controllerName} at ${group}`);
        const query = req.query || {};
        const update = req.body || {};
        
        //dao
        //foo
        const response = await Job.updateDocByQuery({query, update})

        //response
        log(`response ${controllerName} at ${group}`, response);
        return res.status(200).json(response);
    } catch(error){
        log(`error ${controllerName} at ${group}`, error);
        return res.status(500).json({message: error});
    }
};
export default Unit