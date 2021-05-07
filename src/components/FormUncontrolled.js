//using uncontrolled components concept

import React, { Component } from 'react'

export default class FormUncontrolled extends Component {

  constructor(props){
    super(props);

    this.state = {
      firstName:"",
      lastName:"",
      greetings:""
    };

    this.inputOne = React.createRef();
    this.inputTwo = React.createRef();
  }

  onSubmit = () => {
    
    let msg = "Welcome, " +  this.inputOne.value + " " + this.inputTwo.value;
    this.setState({
      greetings: msg
    });

    console.log(this.inputOne.value);
    console.log(this.inputTwo.value);
  }

  render() {
    return (
      <div>
        <form autoComplete="off" >
            <h1> {this.state.greetings}</h1> <br/>
            <input type="text" name="firstName" placeholder="Enter firstname" ref={input => (this.inputOne = input)} />
            <input type="text" name="lastName"  placeholder="Enter lastname" ref={input => (this.inputTwo = input)}  />
            <button type="button" onClick={this.onSubmit}>Submit</button>

        </form>
        
      </div>
    )
  }
}