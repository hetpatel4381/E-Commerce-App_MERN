import { TryCatch } from "../middlewares/error.js";
import { Coupon } from "../models/couponModel.js";
import ErrorHandler from "../utils/utility-class.js";

export const newCoupon = TryCatch(async (req, res, next) => {
  const { coupon, amount } = req.body;

  if(!coupon || !amount) {
    return next(new ErrorHandler("Please enter both Coupon and Amount", 400));
  }

  await Coupon.create({
    code: coupon,
    amount,
  });

  res.status(201).json({
    success: true,
    message: `Coupon ${coupon} created successfully`,
  });
});
