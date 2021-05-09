import React, { Component } from "react";
import "../TodoList/TodoList.css";

export default class TodoList extends Component {
  state = {
    tasklist: [],
    newTask: "",
  };

  handleInput = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let currentList = this.state.tasklist;
      this.setState({
        tasklist: [...currentList, this.state.newTask],
        newTask: ""
      });
    }
  };

  handleRemove = (key) => {
    this.setState({
      tasklist: this.state.tasklist.filter((item, index) => index !== key)
    });
  };

  render() {
    const { newTask, tasklist } = this.state;
    return (
      <div className="todo-container">
        <div className="input-section">
          <h2>TodoList</h2>
          <input
            type="text"
            onChange={this.handleInput}
            placeholder="Enter the task"
            value={newTask}
            onKeyDown={this.handleKeyDown}
          />
        </div>

        <ul>
          {tasklist.map((item, index) => (
            <li key={index}>
              {item}
              <i
                className="fas fa-trash-alt"
                onClick={() => this.handleRemove(index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
