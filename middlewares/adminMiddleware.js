module.exports = (request, response, next) => {
  if (request.user && request.user.role === "admin") {
    next();
  } else {
    response.status(403).send("Admins only");
  }
};
