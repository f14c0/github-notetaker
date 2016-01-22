/*jshint esnext: true */
import React from 'react';
import Router from 'react-router';

var SearchUser = React.createClass({
    mixins : [Router.History],
    setRef : (ref) => {
      this.userRef = ref;
    },
    handleSubmit :() => {
        var username = this.userRef.value;
        this.userRef.value ='';
        //Transition to route /profile /:username
        this.history.pushState(null, "profile/" + username);
    },
    render : () => {
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
      );
    }
});

//export component so we can use require to  use it
export default SearchUser;
