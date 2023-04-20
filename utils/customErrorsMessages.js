const customErrorMessage = (message) => {
  if (message.startsWith('E11000') && message.includes('dup key: { name')) {
    return { status: 409, message: 'name already used' };
  }
  if (message.startsWith('E11000') && message.includes('dup key: { email')) {
    return { status: 409, message: 'email already used' };
  }
  if (message === 'invalid token') {
    return { status: 401, message: 'not authorized' };
  }
  return { status: 500, message: 'internal error' };
};

module.exports = customErrorMessage;
