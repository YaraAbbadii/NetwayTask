const jwt = require("jsonwebtoken");

exports.login = async (request, response, next) => {
  const { username, password } = request.body;

  const token = jwt.sign({ username, role: "admin" }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  response.status(200).json({ message: "Login successful", token });
};
