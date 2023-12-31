import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
// import dontenv from 'dotenv'
// dontenv.config();

// const SECRET_KEY = process.env.SECRET_KEY as string;

import { SECRET_KEY } from '../../utils/env.js';

const Unit =async (req: Request, res:Response, next:NextFunction ) =>{
    //get token from cookies
    const {sessionToken} = await req.cookies;
    console.log(">>>request cookies at authenticateToken mw", req.cookies);


    let token = sessionToken;

    if(!sessionToken){
        //get token from headers
        const {headers} = req;
        const {authorization} = headers;
        console.log(">>>mw Authorization header::", {authorization});
        if(!authorization){return res.status(401).json({message: "Invalid request!"})};

        
        token = authorization.split(" ")[1];
        console.log(">>>mw fetchToken:", {token});
        if(!token){return res.status(401).json({message: "Invalid token!"})};
    };

    //verifytoken
    jwt.verify(token, SECRET_KEY as string, async (err:any, decoded:any)=>{
        if(err){
            console.log(">>> error at authenticateToken mw", {err});
            return res.status(401).json({message: "Invalid token!!"});
        };

        console.log(">>> decoded", decoded);
        const{username, role} = decoded as any;

        console.log(">>> setting cookies");
        res.cookie("sessionUsername", username);
        res.cookie("sessionRole", role);
        const {headers} = req;
        req.headers = {...headers, sessionUsername: username, sessionRole:role}
        next();
    })
};

export default Unit;