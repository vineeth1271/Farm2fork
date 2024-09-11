import express from "express";
import {
  createProductController,
  getProductController,
  deleteProductController,
  getSingleProductController,
  productPhotoController,
  updateProductController,
  productFiltersController,
  productCountController,
  productListController,
  searchProductController,
  realtedProductController,
  productCategoryController,
  braintreeTokenController,
  braintreePaymentController,
} from "../controllers/productController.js";
import { isFarmer, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import { getAllOrdersController } from "../controllers/authController.js";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isFarmer,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isFarmer,
  formidable(),
  updateProductController
);

// //get products
router.get("/get-product", getProductController);

// //single product
router.get("/get-product/:slug", getSingleProductController);

// //get photo
router.get("/product-photo/:pid", productPhotoController);

// //delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//filter
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search products
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payment routes
//token
router.get("/braintree/token", braintreeTokenController);

//payements
router.post("/braintree/payment", requireSignIn, braintreePaymentController);

export default router;
