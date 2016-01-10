var React = require('react');
var Notelist = require('./Notelist');

var Notes = React.createClass({
    componentWillUpdate: function(nextProps, nextState){

    },

    render : function () {
      return(
        <div className="panel panel-info">
          <div className="panel-heading "> Notes for {this.props.username.toUpperCase()} </div>
          <div className="list-group"><Notelist notes ={this.props.notes} /></div>
        </div>
      )
    }
});

//export component so we can use require to  use it
module.exports = Notes
