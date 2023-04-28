const getCurrent = (req, res, next) => {
  try {
    const { email, name, id, avatar } = req.user;
    res.json({
      status: 'success',
      code: 200,
      data: {
        user: {
          id,
          name,
          email,
          avatar,
        },
      },
    });
  } catch (error) {
    next();
  }
};

module.exports = getCurrent;
