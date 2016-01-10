var React = require('react');

var Repos = React.createClass({
    render : function () {
      return(
        <div className="panel panel-default">
          <div className="panel-heading"> Repos </div>
          <div className="panel-body"></div>
        </div>
      )
    }
});

//export component so we can use require to  use it
module.exports = Repos
