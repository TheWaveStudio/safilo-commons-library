module.exports.apiResponse = (status, msg, data = {}) => {
  return {
    status,
    message: msg,
    data,
  };
};
