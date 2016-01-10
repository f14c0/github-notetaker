
var React = require('react');

var UserPofile = React.createClass({
    render : function () {
      console.log(this.props);
      return(
        <div className="panel panel-default">
          <div className="panel-heading"> Notes</div>
          <div className="panel-body">: {this.props.notes}</div>
        </div>
      )
    }
});

//export component so we can use require to  use it
module.exports = UserPofile
