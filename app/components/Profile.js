var React = require('react');
var Router = require('react-router');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
//Import used Components
var Repos = require('../components/Github/Repos');
var UserProfile = require('../components/Github/UserProfile');
var Notes = require('../components/Notes/Notes');



var Profile = React.createClass({
    mixins:[ReactFireMixin],
    //Component initial state function , returns default Values.
    getInitialState: function(){
      return {
        repos:['1','2','3'],
        bio:{bio:"mi bio"},
        notes:['a','b','d'],
      };
    },
    componentWillMount : function () {
      // Set a new ref to firebase
      this.ref = new Firebase('https://user-social-networks.firebaseio.com/');
      // Setup child ref inside Firebase
      var childRef = this.ref.child(this.props.params.username);
      //Bind reference to "notes" property (this.props.notes)
      this.bindAsArray(childRef,'notes');
    },
    componentWillUnmount : function (){
      //unbind reference to Firebase  to  prop 'notes'
      this.unbind('notes');

    },
    componentWillReceiveProps:function(nextProps) {
      //unbind  old reference to Firebase  to  prop 'notes'
      this.unbind('notes');
      // Update child ref to firebase using paramas from incoming props
      var childRef = this.ref.child(nextProps.params.username);
      //Bind reference to "notes" property (this.props.notes)
      this.bindAsArray(childRef,'notes');
    },

    render : function () {
      return(
        <div className = "row">
          <div className = "col-md-4">
            <UserProfile username ={this.props.params.username}/>
          </div>
          <div className = "col-md-4">
            <Repos repos={this.state.repos} username ={this.props.params.username}/>
          </div>
          <div className = "col-md-4">
            <Notes notes={this.state.notes} username ={this.props.params.username}/>
          </div>
        </div>
      )
    }
});

//export component so we can use require to  use it
module.exports = Profile
