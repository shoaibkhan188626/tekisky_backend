const errorWrapper = (theFunc) => async (req, res, next) => {
  try {
    await Promise.resolve(theFunc(req, res, next));
  } catch (error) {
    next(error);
  }
};

export default errorWrapper;
