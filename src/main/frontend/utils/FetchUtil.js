const createReactClass = require('create-react-class');

const FetchUtil = createReactClass({
  statics: {
    handleError: function(response) {
      if (!response.ok) throw new Error(response.statusText);
      return response;
    },
  },
  render() {
  },
});

export default FetchUtil;
