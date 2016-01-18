var React = require('react');
var Router = require('react-router');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
//Import used Components
var Repos = require('../components/Github/Repos');
var UserProfile = require('../components/Github/UserProfile');
var Notes = require('../components/Notes/Notes');
//Import Utils
var Helper = require('../utils/Helper' );


var Profile = React.createClass({
    mixins:[ReactFireMixin],
    //Component initial state function , returns default Values.
    getInitialState: function(){
      return {
        repos:[],
        bio:{},
        notes:[],
      };
    },
    init: function(username){
      // Setup child ref inside Firebase
      var childRef = this.ref.child(username);
      //Bind reference to "notes" property (this.props.notes)
      this.bindAsArray(childRef,'notes');
      // get Github info
      Helper.getGithubInfo(username)
        .then(function (response) {
        this.setState(
          {
            repos:response.repos,
            bio: response.githubInfo,
          });
        }.bind(this));// bind to component context , to bew able call setState func
    },
    componentWillMount : function () {
      // Set a new ref to firebase
      this.ref = new Firebase('https://user-social-networks.firebaseio.com/');
      this.init(this.props.params.username);

    },
    componentWillUnmount : function (){
      //unbind reference to Firebase  to  prop 'notes'
      this.unbind('notes');

    },

    componentWillReceiveProps:function(nextProps) {
      //unbind  old reference to Firebase  to  prop 'notes'
      this.unbind('notes');
      this.init(nextProps.params.username);
    },
    //custom handlers
    handleAddNote: function (newNote) {
      console.log(newNote);
      this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
    },
    render : function () {
      return(
        <div className = "row">
          <div className = "col-md-4">
            <UserProfile username ={this.props.params.username} bio={this.state.bio}/>
          </div>
          <div className = "col-md-4">
            <Repos repos={this.state.repos} username ={this.props.params.username}/>
          </div>
          <div className = "col-md-4">
            <Notes
              notes= {this.state.notes}
              username ={this.props.params.username}
              addNote = {this.handleAddNote}
              />
          </div>
        </div>
      )
    }
});

//export component so we can use require to  use it
module.exports = Profile
