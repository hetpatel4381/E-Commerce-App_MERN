import express from "express";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import NodeCache from "node-cache";
// import cors from "cors";

// Import Routes.
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";

connectDB();

export const myCache = new NodeCache();

const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Working with /api/v1");
});

// Using Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);

// app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
