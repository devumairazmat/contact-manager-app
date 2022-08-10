import React from "react";
import ContactCard from "../contactCard/ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  
  const renderContactList = props.contacts.map((contact) => {
    return (
      <>
        <ContactCard
          contact={contact}
          clickHandler={deleteContactHandler}
        ></ContactCard>
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
