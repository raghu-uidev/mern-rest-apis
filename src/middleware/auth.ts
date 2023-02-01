import { Request, Response } from "express";
import * as jwt from 'jsonwebtoken';
import APP_CONFIGS from "../config/configs";

const verifyToken = (req: Request, res: Response, next: any) => {
    const authToken: any = req.headers['x-authorization'];
    if(!authToken) {
        res.status(401).send({message:'Bad request, token missing  with the request'});
    } else {
        jwt.verify(authToken, APP_CONFIGS.tokenAuthKey, (err: any, result: any) => {
          if(err){
            res.status(403).send({message:'Unauthorized User'});
          } else {
            return next();
          }
        });
    }
}

const authService = {
    verifyToken: verifyToken
}

export default authService;