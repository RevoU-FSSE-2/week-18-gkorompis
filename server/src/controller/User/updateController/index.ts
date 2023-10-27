import { Request, Response } from 'express';

import { User } from '../../../models/index.js';
import { log } from '../../../utils/logger.js';


const controllerName = "updateController"
const group = "User"

const Unit = async (req: Request, res: Response) =>{
    try {
        //request parameters
        log(`${controllerName} at ${group}`);
        const query = req.query || {};
        const update = req.body || {};
        
        //dao
        const response = await User.updateDocByQuery({query, update})

        //response
        log(`response ${controllerName} at ${group}`, response);
        return res.status(200).json(response);
    } catch(error){
        log(`error ${controllerName} at ${group}`, error);
        return res.status(500).json({message: error});
    }
};
export default Unit