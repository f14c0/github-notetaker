/*jshint esnext: true */

import React from 'react';

var Repos = React.createClass({
    propTypes:{
      repos:React.PropTypes.array.isRequired,
      username:React.PropTypes.string.isRequired,
    },
    render : ()=> {
      var repos = this.props.repos.map(

      (item, index)=>{
        return (
          <li className = "list-group-item " key={index}>
            <strong><a href={item.html_url} target="_blank">{item.name}</a></strong>
            <br/>
            {item.description && <span>{item.description}</span>}
          </li>
        );
      });

      return(
        <div className="panel panel-default">
          <div className="panel-heading"> Repos </div>
          <div className="list-group">{repos}</div>
        </div>
      );
    }
});

//export component so we can use require to  use it

export default Repos;
