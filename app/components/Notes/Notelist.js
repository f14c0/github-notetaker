/*jshint esnext: true */

import React from 'react';

var Notelist = React.createClass({
    propTypes:{
      notes:React.PropTypes.array.isRequired,
    },
    render :() => {

      var notes = this.props.notes.map(function (item, index) {
        return(
          <li className = "list-group-item" key ={index}>
          {item['.value']}</li>);
      });
      return(
          <div className="list-group">{notes}</div>
      );
    }
});

//export component so we can use require to  use it
export default Notelist;
