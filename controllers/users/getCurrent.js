const getCurrent = (req, res, next) => {
  try {
    const { email, name, id } = req.user;
    res.json({
      status: 'success',
      code: 200,
      data: {
        user: {
          id,
          name,
          email,
        },
      },
    });
  } catch (error) {
    next();
  }
};

module.exports = getCurrent;
