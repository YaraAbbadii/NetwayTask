const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const connect = require("./config/db");
const jwtMiddleware = require("./middlewares/jwt");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const errorHandlingMiddleware = require("./middlewares/errorHandler");
const { body, validationResult } = require("express-validator");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(errorHandlingMiddleware);

app.post(
  "/auth/login",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;
      res.status(200).send("Login successful");
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

app.use("/auth", authRoute); 
app.use("/products", jwtMiddleware, productRoute);
app.use(errorHandlingMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
