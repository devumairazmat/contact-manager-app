import React from "react";
import ContactCard from "../contactCard/ContactCard";

const ContactList = (props) => {
  console.log(props);
  const renderContactList = props.contacts.map((contact) => {
    return (
      <>
    <ContactCard contact={contact}></ContactCard>
     </>
      
    );
  });
  return (
    <>
    
      <h3 className="text-center">Contact List</h3>
      {renderContactList}
    </>
  );
};

export default ContactList;
