module.exports = (error, request, response, next) => {
  console.error(error.message);

  response.status(500).json({
    success: false,
    message: error.message,
  });
};
