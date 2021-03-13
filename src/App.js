import "./App.css";
import React, { Component } from "react";
// import Notifications from "./components/Notifications/Notifications";
// import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { ContactList } from "./components/ContactList";
import { Filter } from "./components/Filter";
import { CSSTransition } from "react-transition-group";
import Logo from "./components/Logo/Logo";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    filter: "",
    isExists: false,
  };

  addContact = (obj) => {
    const x = this.state.contacts.find((elem) => {
      // return elem.name === obj.name && elem.number === obj.number;
      return elem.name === obj.name;
    });
    if (x) {
      this.setState({
        isExists: true,
      });
      setTimeout(() => this.setState({ isExists: false }), 2000);
      return;
    }
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, obj], isExists: false };
    });
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleFilterChange = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { contacts, filter, contact, name, isExists } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.includes(filter)
    );
    return (
      <>
        <Logo />
        {/* <Notifications name={name} isExists={isExists} /> */}

        {/* <Title name="phonebook" /> */}
        <Form addContact={this.addContact} />
        <Filter
          filteredContacts={this.handleFilterChange}
          value={this.state.filter}
          onChange={this.handleFilterChange}
        />

        <CSSTransition>
          <ContactList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </CSSTransition>

        {/* <CSSTransition
          in={inProp}
          timeout={200}
          classNames="my-node"
          // unmountOnExit
        > */}
        {/* </CSSTransition> */}
      </>
    );
  }
}

export default App;
