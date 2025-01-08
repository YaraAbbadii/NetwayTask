const jwt = require("jsonwebtoken");

exports.isAdmin = (request, response, next) => {
  const token = request.headers["authorization"];

  if (!token) {
    return response.status(403).json({ message: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return response.status(403).json({ message: "Invalid token" });
    }

    if (decoded.role !== "admin") {
      return response.status(403).json({ message: "Admins only" });
    }

    request.user = decoded;
    next();
  });
};
