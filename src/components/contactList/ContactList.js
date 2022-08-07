import React from "react";

const ContactList = (props) => {
  console.log(props);

  const renderContactList = props.contact.map((contact) => {
    return (
      <div key={contact.id}>
        <h3>{contact.name}</h3>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
    );
  });
  return (
    <>
      <h3 className="text-center">Contact List</h3>
      <hr />
      {renderContactList}
    </>
  );
};

export default ContactList;
