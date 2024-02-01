import mongoose from "mongoose";
import validator from "validator";
const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "Please provide ID"],
    },
    name: {
        type: String,
        required: [true, "Please provide Name"],
    },
    email: {
        type: String,
        unique: [true, "Email Already Exist"],
        required: [true, "Please provide your Email"],
        validator: {
            validator: validator.isEmail, // Correct the syntax for email validation
            message: "Invalid Email",
        },
    },
    photo: {
        type: String,
        required: [true, "Please Add Photo"],
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "Please provide your Gender"],
    },
    dob: {
        type: Date,
        required: [true, "Please provide your Date Of Birth"],
    }
}, {
    timestamps: true,
});
UserSchema.virtual("age").get(function () {
    const today = new Date();
    const dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth() || (today.getMonth === dob.getMonth && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
});
export const User = mongoose.model("User", UserSchema);
