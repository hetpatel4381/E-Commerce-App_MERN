import express from "express";
import userRouter from "./routes/userRoutes.js";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";

const app = express();
const port = 5000;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Working with /api/v1");
});

app.use("/api/v1/user", userRouter);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
