import express from "express";
import { newOrder } from "../controllers/orderController.js";
const orderRoutes = express.Router();
// post route - /api/v1/order/new
orderRoutes.post("/new", newOrder);
export default orderRoutes;
