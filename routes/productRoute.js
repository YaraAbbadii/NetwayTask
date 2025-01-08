const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();
const adminMiddleware = require("../middlewares/adminMiddleware");
const jwtMiddleware = require('../middlewares/jwt');

router.post("/products", adminMiddleware, productController.AddProduct);
router.get("/products", productController.GetAllProduct);
router.get("/products/:id", productController.GetProductById);
router.put("/products/:id", adminMiddleware, productController.UpdateProduct);
router.delete(
  "/products/:id",
  adminMiddleware,
  productController.DeleteProduct
);

module.exports = router;

