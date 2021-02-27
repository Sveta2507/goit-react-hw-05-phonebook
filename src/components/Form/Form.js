import React, { Component } from "react";
import { v4 as id } from "uuid";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    const contact = {
      id: id(),
      number: number,
      name: name,
    };
    console.log(contact);
    this.props.addContact(contact);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            required
            name="name"
            onChange={this.handleChange}
            placeholder="Enter your name please"
          />
          <label>Number: </label>
          <input
            type="text"
            required
            name="number"
            onChange={this.handleChange}
            placeholder="Enter your phone number please"
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default Form;
