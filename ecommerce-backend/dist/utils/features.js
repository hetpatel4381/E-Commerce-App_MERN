import mongoose from "mongoose";
import { myCache } from "../app.js";
export const connectDB = () => {
    mongoose
        .connect("mongodb://0.0.0.0:27017", {
        dbName: "Ecommerce_24",
    })
        .then((c) => {
        console.log(`Db connected to ${c.connection.host}`);
    })
        .catch((e) => {
        console.log(e);
    });
};
export const invalidatesCache = async ({ product, order, admin, userId, orderId, productId, }) => {
    if (product) {
        const productKeys = [
            "latest-products",
            "categories",
            "all-productRoutes",
        ];
        // const products = await Product.find({}).select("_id");
        // product.forEach((i) => {
        //   productKeys.push(`product-${i._id}`);
        // });
        if (typeof productId === "string") {
            productKeys.push(`product-${productId}`);
        }
        if (typeof productId === "object") {
            productId.forEach((i) => productKeys.push(`product-${i}`));
        }
        myCache.del(productKeys);
    }
};
