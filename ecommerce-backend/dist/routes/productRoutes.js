import express from "express";
import { getAdminProducts, getAllCategories, getLatestProducts, getSingleProduct, newProduct, updateProduct, } from "../controllers/productController.js";
import { singleUpload } from "../middlewares/multer.js";
import { adminOnly } from "../middlewares/auth.js";
const productRoutes = express.Router();
// Create New Product Route - api/v1/products/new
productRoutes.post("/new", adminOnly, singleUpload, newProduct);
// To Get Last 10 Products Route - api/v1/products/latest
productRoutes.get("/latest", getLatestProducts);
// To Get ALl Unique Categories Route - api/v1/products/categories
productRoutes.get("/categories", getAllCategories);
// To Get all Products Route - api/v1/products/admin-products
productRoutes.get("/admin-products", getAdminProducts);
// To Get Single Products Route - api/v1/products/id:(dynamic ID 'OR' custom Id)
productRoutes.route("/:id").get(getSingleProduct).put(updateProduct);
export default productRoutes;
