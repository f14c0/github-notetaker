var React = require('react');
var Router = require('react-router');
//Impor used Components
var Repos = require('../components/Github/Repos');
var UserProfile = require('../components/Github/UserProfile');
var Notes = require('../components/Notes/Notes');



var Profile = React.createClass({
    //Component initial state function , returns default Values.
    getInitialState: function(){
      return {
        repos:['1','2','3'],
        bio:{bio:"mi bio"},
        notes:['a','b','d'],
      };
    },
    render : function () {
      console.log(this.props);
      return(
        <div className = "row">
          <div className = "col-md-4">
            <UserProfile username ={this.props.params.username}/>
          </div>
          <div className = "col-md-4">
            <Repos repos={this.state.repos}/>
          </div>
          <div className = "col-md-4">
            <Notes notes={this.state.notes}/>
          </div>
        </div>
      )
    }
});

//export component so we can use require to  use it
module.exports = Profile
