import mongoose from "mongoose";
import { InvalidatesCacheProps } from "../types/types.js";
import { myCache } from "../app.js";
import { Product } from "../models/productModel.js";

export const connectDB = (uri: string) => {
  mongoose
    .connect(uri, {
      dbName: "Ecommerce_24",
    })
    .then((c) => {
      console.log(`Db connected to ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const invalidatesCache = async ({
  product,
  order,
  admin,
  userId,
  orderId,
  productId,
}: InvalidatesCacheProps) => {
  if (product) {
    const productKeys: string[] = [
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
