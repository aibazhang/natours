module.exports = (err, req, res, next) => {
  // console.log(err.stack);
  err.staticCode = err.staticCode || 500;
  err.status = err.status || 'error';
  res.status(err.staticCode).json({
    status: err.status,
    message: err.message,
  });
};
