import React from "react";
import { Container } from "reactstrap";
import AddContact from "../components/addContact/AddContact";
import ContactList from "../components/contactList/ContactList";
import Header from "../components/header/Header";


function Contact() {
    const contact = [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@gmail.com",
            phone: "123-456-7890"
        },
        {
            id: 2,
            name: "Dev Umair",
            email: "umair@gmail.com",
            phone: "+92123-456-7890"
        }
    ]
  return (
    <>
      <Header />
      <hr />
      <Container>
        <AddContact />
        <ContactList contact={contact} />
      </Container>
    </>
  );
}

export default Contact;
