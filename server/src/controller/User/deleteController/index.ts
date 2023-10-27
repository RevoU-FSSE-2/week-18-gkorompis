import { Request, Response } from 'express';

import { User } from '../../../models/index.js';
import { log } from '../../../utils/logger.js';


const controllerName = "deleteController"
const group = "User"

const Unit = async (req: Request, res: Response) =>{
    try {
        //request parameters
        log(`${controllerName} at ${group}`);
        const query = req.params || req.query ;
        
        //dao
        const response = await User.deleteDocByQuery({query})

        //response
        log(`response ${controllerName} at ${group}`, response);
        return res.status(200).json(response);
    } catch(error){
        log(`error ${controllerName} at ${group}`, error);
        return res.status(500).json({message: error});
    }
};
export default Unit