/*jshint esnext: true */
import  React from 'react';

var AddNote = React.createClass({
    propTypes:{
      username:React.PropTypes.string,
      addNote:React.PropTypes.func.isRequired,
    },
    setRef:(ref)=> {
      this.note = ref;
    },
    handleSubmit:()=>{
      //Use .value  to get actual value of the prop
      var newNote = this.note.value;
      this.note.value='';
      this.props.addNote(newNote);
    },
    render :()=>{
      return(
        <div className= "input-group">
            <input className="form-control"  type ="Text" ref ={this.setRef}>
            </input>
            <span className="input-group-btn">
              <button  className ="btn btn-primary" onClick={this.handleSubmit}>Add Note</button>
            </span>
        </div>
      );
    }
});

//export component so we can use require to  use it
export default  AddNote;
