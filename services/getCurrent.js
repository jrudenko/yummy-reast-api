const getCurrent = (req, res, next) => {
  try {
    const { email } = req.user;
    res.json({
      status: 'success',
      code: 200,
      data: {
        user: {
          email,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCurrent };
