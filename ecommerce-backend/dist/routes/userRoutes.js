import express from "express";
import { deleteUser, getAllUsers, getSingleUser, newUser, } from "../controllers/userController.js";
import { adminOnly } from "../middlewares/auth.js";
const userRouter = express.Router();
// post route - /api/v1/user/new
userRouter.post("/new", newUser);
// get route - /api/v1/user/all
userRouter.get("/all", adminOnly, getAllUsers);
// get + delete - route - /api/v1/user/:id(userId OR DynamicId)
userRouter.route("/:id").get(getSingleUser).delete(adminOnly, deleteUser);
export default userRouter;
