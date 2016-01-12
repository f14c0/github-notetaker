var React = require('react');
var Router = require('react-router');

var SearchUser = React.createClass({
    mixins : [Router.History],
    setRef : function (ref) {
      this.userRef = ref;
    },
    handleSubmit :function () {
        var username = this.userRef.value;
        this.userRef.value ='';
        //Transition to route /profile /:username
        this.history.pushState(null, "profile/" + username);
    },
    render : function () {
      return(
        <div className="panel panel-info">
          <div className ="input-group">
            <input className="form-control"  type ="Text" ref ={this.setRef}>
            </input>
            <span className="input-group-btn">
              <button  className ="btn btn-primary" onClick={this.handleSubmit}>Search User</button>
            </span>

          </div>
        </div>
      )
    }
});

//export component so we can use require to  use it
module.exports = SearchUser
