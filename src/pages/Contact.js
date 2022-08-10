import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import AddContact from "../components/addContact/AddContact";
import ContactList from "../components/contactList/ContactList";
import Header from "../components/header/Header";
import api from "../api/contacts";


function Contact() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

// retriveContacts from Json file
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return (response.data);
  }
  
  const addContactHandler = (contact) => {
    const reqest = {
      id: uuidv4(), 
      ...contact
    }
    const response = api.post("/contacts", reqest);
    setContacts([...contacts, response.data]);
  };

  const removeContactHandler = (id) => {
    
    const newConactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newConactList);
  };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) {
    //   setContacts(retriveContacts);
    // }
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if(allContacts) setContacts(allContacts);
    }
    getAllContacts();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Header />
      <hr />
      <Container>
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} />
      </Container>
    </>
  );
}

export default Contact;
