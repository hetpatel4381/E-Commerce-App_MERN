import mongoose from "mongoose";
import { InvalidatesCacheProps, OrderItemType } from "../types/types.js";
import { myCache } from "../app.js";
import { Product } from "../models/productModel.js";
import { Order } from "../models/orderModel.js";

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

  if (order) {
    const ordersKeys: string[] = [
      "all-orders",
      `my-orders-${userId}`,
      `order-${orderId}`,
    ];

    myCache.del(ordersKeys);
  }

  if (admin) {
    myCache.del([
      "admin-stats",
      "admin-pie-charts",
      "admin-bar-charts",
      "admin-line-charts",
    ]);
  }
};

export const reduceStock = async (orderItems: OrderItemType[]) => {
  for (let i = 0; i < orderItems.length; i++) {
    const order = orderItems[i];
    const product = await Product.findById(order.productId);
    if (!product) {
      throw new Error("Product Not Found!");
    }
    product.stock -= order.quantity;
    await product.save();
  }
};
