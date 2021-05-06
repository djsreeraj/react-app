import React, { Component } from "react";

export default class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
        console.log(this.state.firstName+ " " + this.state.lastName)
  }

  render() {
    return (
      <div>
      <h1> Welcome {this.state.firstName}  {this.state.lastName}</h1>
      <br/> <br/>
        <form autoComplete="off">
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="FirstName"
          />

          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="LastName"
          />

          <button type="button" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
