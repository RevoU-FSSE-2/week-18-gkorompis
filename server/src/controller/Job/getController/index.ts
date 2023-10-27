import { Request, Response } from 'express';
import { Job } from '../../../models/index.js';
import { log } from '../../../utils/logger.js';

const controllerName = "getController"
//foo
const group = "Job"

const Unit = async (req: Request, res: Response) =>{
    try {
        //request parameters
        log(`${controllerName} at ${group}`);
        const query = req.query || {};
        
        //dao
        const response = await Job.findDocByQuery({query});

        //response
        log(`response ${controllerName} at ${group}`, response);
        return res.status(200).json(response);
    } catch(error){
        log(`error ${controllerName} at ${group}`, error);
        return res.status(500).json({message: error});
    }
};
export default Unit