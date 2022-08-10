import React from "react";
import { useState } from "react";
import { Container } from "reactstrap";
import AddContact from "../components/addContact/AddContact";
import ContactList from "../components/contactList/ContactList";
import Header from "../components/header/Header";


function Contact() {
  const [contacts, setContact] = useState([]);
  
  const addContactHandler = (contact) => {
    setContact([...contacts, contact]);
  }
  return (
    <>
      <Header />
      <hr />
      <Container>
        <AddContact  addContactHandler={addContactHandler} />
        <ContactList contact={contacts} />
      </Container>
    </>
  );
}

export default Contact;
