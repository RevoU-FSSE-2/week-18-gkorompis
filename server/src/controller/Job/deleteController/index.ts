import { Request, Response } from 'express';

import { Job } from '../../../models/index.js';
import { log } from '../../../utils/logger.js';


const controllerName = "deleteController"
//foo
const group = "Job"

const Unit = async (req: Request, res: Response) =>{
    try {
        //request parameters
        log(`${controllerName} at ${group}`);
        //foo
        const query = req.params || req.query ;
        
        //dao
        //foo
        const response = await Job.deleteDocByQuery({query})

        //response
        log(`response ${controllerName} at ${group}`, response);
        return res.status(200).json(response);
    } catch(error){
        log(`error ${controllerName} at ${group}`, error);
        return res.status(500).json({message: error});
    }
};
export default Unit