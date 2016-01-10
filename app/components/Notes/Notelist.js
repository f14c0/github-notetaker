var React = require('react');

var Notelist = React.createClass({
    propTypes:{
      notes:React.PropTypes.array.isRequired,
    },
    render : function () {

      var notes = this.props.notes.map(function (item, index) {
        return(
          <li className = "list-group-item" key ={index}>
          {item['.value']}</li>)
      });
      console.log(notes);
      return(
          <div className="list-group">{notes}</div>
      )
    }
});

//export component so we can use require to  use it
module.exports = Notelist
