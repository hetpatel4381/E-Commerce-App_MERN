import express from "express";
import { newCoupon } from "../controllers/paymentController.js";

const paymentRoutes = express.Router();

// Coupon Route - /api/v1/payment/coupon/all
paymentRoutes.post("/coupon/new", newCoupon);

export default paymentRoutes;
