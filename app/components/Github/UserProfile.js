var React = require('react');

var UserPofile = React.createClass({
    propTypes:{
      bio:React.PropTypes.object.isRequired,
      username:React.PropTypes.string.isRequired,
    },
    render : function () {
      console.log(this.props.bio);
      return(
        <div className="panel panel-primary">
          <div className="panel-heading">{this.props.bio.name}&#39;s Info</div>
          <div className="panel-body">
            <div className="panel-body">
              <div className="col-xs-8 col-xs-offset-2">
                <img src={this.props.bio.avatar_url} alt={this.props.username}
                    className="img-circle img-responsive center-block"/>
              </div>
            </div>
            <div className="col-xs-12">
                <div className="text-center">
                { this.props.bio.blog  && <span><h4> <i className="fa fa-link"></i> <a href={this.props.bio.blog}>{this.props.bio.blog}</a></h4></span>}
                { this.props.bio.email  && <span><h4> <i className="fa fa-envelope-o"></i> {this.props.bio.email}</h4></span>}
                { this.props.bio.location  && <span><h4> <i className="fa fa-map-marker"></i> {this.props.bio.location}</h4></span>}
                </div>
            </div>

          </div>

        </div>
      )
    }
});

//export component so we can use require to  use it
module.exports = UserPofile
