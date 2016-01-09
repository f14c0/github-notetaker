var React = require('react');

var Home = React.createClass({
    render : function () {
      return(
        <h2 className = "text-center">
          Search by Github Name
        </h2>
      )
    }
});

//export component so we can use require to  use it
module.exports = Home
