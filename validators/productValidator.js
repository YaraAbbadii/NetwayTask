const { body } = require("express-validator");

exports.validateProduct = [
  body("name").notEmpty().withMessage("Name is required."),
  body("category")
    .optional()
    .isString()
    .withMessage("Category must be a string."),
  body("price")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a positive number."),
  body("quantity")
    .isInt({ min: 0 })
    .withMessage("Quantity must be a non-negative integer."),
];
