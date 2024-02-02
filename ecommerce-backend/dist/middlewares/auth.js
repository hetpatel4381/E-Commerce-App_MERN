import { User } from "../models/userModel.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "./error.js";
// Middleware to make sure only admin is allowed.
export const adminOnly = TryCatch(async (req, res, next) => {
    const { id } = req.query;
    if (!id) {
        return next(new ErrorHandler("Need to Login First", 401));
    }
    const user = await User.findById(id);
    if (!user) {
        return next(new ErrorHandler("This ID is not Registered", 401));
    }
    if (user.role !== "admin") {
        return next(new ErrorHandler("Only Admin can login", 403));
    }
    next();
});
