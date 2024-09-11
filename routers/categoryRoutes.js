import express from "express";
import { isFarmer, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCatgoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/createCategoryController.js";

const router = express.Router();

//routes
//create category
router.post(
  "/create-category",
  requireSignIn,
  isFarmer,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isFarmer,
  updateCategoryController
);

//get all category
router.get("/get-category", categoryController);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isFarmer,
  deleteCatgoryController
);

export default router;
