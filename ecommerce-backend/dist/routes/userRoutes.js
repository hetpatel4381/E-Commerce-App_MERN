import express from "express";
import { deleteUser, getAllUsers, getSingleUser, newUser, } from "../controllers/userController.js";
import { adminOnly } from "../middlewares/auth.js";
const userRoutes = express.Router();
// post route - /api/v1/user/new
userRoutes.post("/new", newUser);
// get route - /api/v1/user/all
userRoutes.get("/all", adminOnly, getAllUsers);
// get + delete - route - /api/v1/user/:id(userId OR DynamicId)
userRoutes.route("/:id").get(getSingleUser).delete(adminOnly, deleteUser);
export default userRoutes;
