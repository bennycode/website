const createReactClass = require('create-react-class');

const FetchHelper = createReactClass({
  statics: {
    handleErrors: function(response) {
      if (!response.ok) throw new Error(response.statusText);
      return response;
    },
  },
  render() {
  },
});

export default FetchHelper;
