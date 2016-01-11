var React = require('react');
var SearchUser = require('./SearchUser');

var Main = React.createClass({
  render:function () {
    return(
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
            <div className="col-sm-7 col-sm-offset-2" style={{marginTop:15}}>
              <SearchUser/>
            </div>
        </nav>
        <div className="container">
            {this.props.children}
        </div>

      </div>
    )
  }
});

//export component so we can use require to  use it
module.exports = Main;
