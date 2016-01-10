var React = require('react');

var UserPofile = React.createClass({
    render : function () {
      return(
        <div className="panel panel-default">
          <div className="panel-heading"> Github User : {this.props.username.toUpperCase()}</div>
          <div className="panel-body"></div>
        </div>
      )
    }
});

//export component so we can use require to  use it
module.exports = UserPofile
