import React from "react"; 
import { useState } from "react";
import { useEffect } from "react";
import { Container } from "reactstrap";
import { v4 as uuidv4 } from 'uuid';
import AddContact from "../components/addContact/AddContact";
import ContactList from "../components/contactList/ContactList";
import Header from "../components/header/Header";


function Contact() {
 
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  
  const addContactHandler = (contact) => {
    
    setContacts([...contacts,{id:uuidv4(), ...contact}]);
  
  }

  useEffect  (() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) {
      setContacts(retriveContacts);
    }
  }, []);

  useEffect (() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Header />
      <hr />
      <Container>
        <AddContact  addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} />
      </Container>
    </>
  );
}

export default Contact;
