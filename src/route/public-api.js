import express from "express";
import userController from "../controller/user-controller.js";
import jobController from "../controller/job-controller.js";

import cors from 'cors'

const publicRouter = new express.Router();

publicRouter.use(cors());

publicRouter.post("/api/users/register", userController.register);
publicRouter.post("/api/users/login", userController.login);

publicRouter.get("/api/job", jobController.get);
publicRouter.get("/api/job/:jobId", jobController.detail);


export { publicRouter };
