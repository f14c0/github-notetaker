var React = require('react');
var Notelist = require('./Notelist');
var AddNote = require('./AddNote');

var Notes = React.createClass({
    propTypes:{
      notes:React.PropTypes.array.isRequired,
      username:React.PropTypes.string.isRequired,
      addNote:React.PropTypes.func.isRequired,
    },
    render : function () {
      return(
        <div className="panel panel-info">
          <div className="panel-heading "> Notes for {this.props.username.toUpperCase()} </div>
          <div><AddNote addNote={this.props.addNote}/></div>
          <div className="list-group"><Notelist notes ={this.props.notes} /></div>
        </div>
      )
    }
});

//export component so we can use require to  use it
module.exports = Notes
