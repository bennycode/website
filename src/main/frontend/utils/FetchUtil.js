module.exports = {
  handleError: function(response) {
    if (!response.ok) throw new Error(response.statusText);
    return response;
  },
};
