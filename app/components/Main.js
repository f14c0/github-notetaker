var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
  render:function () {
    return(
      <div>
        My First Component
        <ul>
          <li>
            First item
          </li>
          <li>
            Second item
          </li>
        </ul>
      </div>
    )
  }
});

//Where we are going to put the element we just created
ReactDOM.render(<Main />,document.getElementById('app'))
