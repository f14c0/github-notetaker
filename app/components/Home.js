/*jshint esnext: true */

import React from 'react' ;

var Home = React.createClass({
    render : ()=> {
      return(
        <h2 className = "text-center">
          Search by Github Name
        </h2>
      );
    }
});

//export component so we can use require to  use it
export default Home;
