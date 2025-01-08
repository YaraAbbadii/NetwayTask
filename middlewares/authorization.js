module.exports = (requiredRole) => {
    return (req, res, next) => {
      const userRole = req.user?.role;
      if (!userRole || userRole !== requiredRole) {
        return res.status(403).send("You Are Not Authorized !!");
      }
      next();
    };
  };
  