import React from "react";
import { FaTrashAlt,FaRegEdit } from "react-icons/fa";
import Table from "react-bootstrap/Table";

const ContactCard = (props) => {
  // console.log(props);
  const { id, name, phone, email } = props.contact;
  return (
    <>
    <Table>
     <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Email</th>
          <th>Phone no</th>
          <th>Edit/Delete</th>
        </tr>
      </thead>
   
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td><FaTrashAlt/> <FaRegEdit className="mx-2"/></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ContactCard;
