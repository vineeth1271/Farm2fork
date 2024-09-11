import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isFarmer, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/register", registerController);

router.post("/login", loginController);

router.post("/forgot-password", forgotPasswordController);

router.get("/test", requireSignIn, isFarmer, testController);

//user route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//farmer route
router.get("/farmer-auth", requireSignIn, isFarmer, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isFarmer, getAllOrdersController);

//orders update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isFarmer,
  orderStatusController
);

export default router;
