import express from "express";
import {
  deleteUser,
  getAllUsers,
  getSingleUser,
  newUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

// post route - /api/v1/user/new
userRouter.post("/new", newUser);

// get route - /api/v1/user/all
userRouter.get("/all", getAllUsers);

// get + delete - route - /api/v1/user/:id(userId OR DynamicId)
userRouter.route("/:id").get(getSingleUser).delete(deleteUser);

export default userRouter;
