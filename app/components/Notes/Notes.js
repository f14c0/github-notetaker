/*jshint esnext: true */

import React from 'react' ;
import Notelist from './Notelist' ;
import AddNote from './AddNote' ;

var Notes = React.createClass({
    propTypes:{
      notes:React.PropTypes.array.isRequired,
      username:React.PropTypes.string.isRequired,
      addNote:React.PropTypes.func.isRequired,
    },
    render :()=> {
      return(
        <div className="panel panel-info">
          <div className="panel-heading "> Notes for {this.props.username.toUpperCase()} </div>
          <div><AddNote addNote={this.props.addNote}/></div>
          <div className="list-group"><Notelist notes ={this.props.notes} /></div>
        </div>
      );
    }
});

//export component so we can use require to  use it
export default  Notes;
