import express from "express";
import { newUser } from "../controllers/userController.js";

const userRouter = express.Router();

// post route - /api/v1/user/new
userRouter.post("/new", newUser);

export default userRouter;
