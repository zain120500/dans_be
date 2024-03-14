import  express  from "express";
import { errorMiddleware } from "../middleware/error-middleware.js";

import { publicRouter }   from "../route/public-api.js";

import cors from 'cors'

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

export const web = express()
web.use(express.json());
web.use(publicRouter);
web.use(errorMiddleware)

web.use(cors(corsOptions)) 