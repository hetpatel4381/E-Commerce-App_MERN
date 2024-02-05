import express from "express";
import { allOrders, deleteOrder, getSingleOrder, myOrders, newOrder, processOrder, } from "../controllers/orderController.js";
import { adminOnly } from "../middlewares/auth.js";
const orderRoutes = express.Router();
// To create new Order Route - /api/v1/order/new
orderRoutes.post("/new", newOrder);
// To GET My Order Route - /api/v1/order/my
orderRoutes.get("/my", myOrders);
// To GET All Orders Route - /api/v1/order/all
orderRoutes.get("/all", adminOnly, allOrders);
orderRoutes
    .route("/:id")
    .get(getSingleOrder)
    .put(adminOnly, processOrder)
    .delete(adminOnly, deleteOrder);
export default orderRoutes;
