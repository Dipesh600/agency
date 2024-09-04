import { Router,Request,Response } from "express";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

import * as dotenv from 'dotenv';

dotenv.config();

enum StatusCode{
    NotFound=411,
    OK=200,
    Created=201,
    Found=301,
    BadRequest=400,
    Unathorizes=401,
}

export const userRouter=Router();

userRouter.post("/",async (req:Request,res:Response)=>{
    const dburl=process.env.DATABASE_URL;

    const prisma = new PrismaClient({
        datasourceUrl: dburl,
    }).$extends(withAccelerate());

    // figure out this 
    const body=await req.body();
    // const {success}=UserSignUpInp.safeParse(body);


    res.json({
        msg:"user api working",
        status:StatusCode.OK
    })


})
