import jwt from "jsonwebtoken";
import {Request, Response} from "express";
import { ErrorResponse } from "../../../utils/types.js"
import {SECRET_KEY, SECRET_REFRESH_KEY} from "../../../utils/env.js";
// const SECRET_KEY = process.env.SECRET_KEY as string;
// const SECRET_REFRESH_KEY = process.env.SECRET_REFRESH_KEY as string;

const Unit = async (req:Request, res:Response) =>{
    try {
        // get refreshToken
        console.log(">>>refresh token")
        const {sessionRefreshToken, sessionRole, sessionUsername} = req.cookies;
        console.log(">>>refreshToken", {sessionRefreshToken, sessionRole, sessionUsername})
        if(!sessionUsername || !sessionRefreshToken || !sessionRole) return res.status(400).json({message: "Bad request at refreshPostController"})

        jwt.sign(sessionRefreshToken, SECRET_REFRESH_KEY as string, (err: any, decoded: any)=>{
            console.log(">>>err", err)
            console.log(">>>decoded", decoded)
            if(err) return res.status(401).json({message: "Invalid refresh token!"});
            const loginInfo = {username: sessionUsername, role: sessionRole};
            const newToken = jwt.sign(loginInfo, SECRET_KEY as string, {expiresIn:'30m' });
            const newRefreshToken = jwt.sign(loginInfo, SECRET_REFRESH_KEY as string, {expiresIn:'45m' });
            res.cookie("sessionToken", newToken);
            res.cookie("sessionRefreshToken", newRefreshToken);
            res.cookie('sessionRole', sessionRole );
            res.cookie('sessionUsername', sessionUsername );
            const tokens = {
                token: newToken,
                refreshToken: newRefreshToken
            }
            return res.status(200).json(tokens)
        })

    } catch (error) {
        console.log(">>> error at refreshPostController:", error);
        const errorResponse = error as ErrorResponse;
        const {message} = errorResponse;
        return res.status(500).json({message});
    }

};

export default Unit;

// rbac: admin can find all user, but member can only find self;