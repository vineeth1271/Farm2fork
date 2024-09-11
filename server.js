import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routers/authRoute.js";
import cors from "cors";
import categoryRoutes from "./routers/categoryRoutes.js";
//import productroutes from "./routers/productroutes.js";
import productRoutes from "./routers/productRoutes.js";

dotenv.config();

connectDB();

colors;
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Farm2Fork<h1>");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`.bgCyan.white);
});
