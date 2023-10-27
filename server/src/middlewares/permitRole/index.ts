import { Request, Response, NextFunction } from "express";

const Unit = (permittedRoles: string[], endpoint?: string) =>{
    const cb = async (req:Request, res:Response, next: NextFunction) =>{
        try {
            // fetch role from cookies
            // const {sessionRole, sessionUsername} = req.cookies;
            const {sessionRole, sessionUsername} = req.headers as {sessionRole: string, sessionUsername: string};
            
            console.log(">>> sessionRole", sessionRole);
            console.log(">>> sessionUsername", sessionUsername);

            if(!sessionRole){return res.status(401).json({message: "Invalid role!"})};

            //check permission
            if(!permittedRoles.includes(sessionRole)){return res.status(403).json({message: "Unauthorized role access!"})};

            //modify default query for role member
            if(sessionRole=="member"){
                if(endpoint=="jobs"){
                    console.log('>>> modifying default query for members', endpoint)
                    const {query} = req;
                    req.query = {...query, createdBy: sessionUsername}
                } else {
                    console.log('>>> modifying default query for members', endpoint)
                    const {query} = req;
                    req.query = {...query, username: sessionUsername}
                }
            }
            
            console.log(">>> passed role permission", sessionRole, req.query);
            next();
        } catch(err){
            console.log(">>> error at middleware", err);
            return res.status(500).json({message: "Bad request at request body!"});
        }
    };
    return cb;
}
export default Unit;