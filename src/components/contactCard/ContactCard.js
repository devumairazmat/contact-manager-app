import React from "react";
import { FaTrashAlt,FaRegEdit ,FaUserCircle} from "react-icons/fa";
import Table from "react-bootstrap/Table";

const ContactCard = (props) => {
  // console.log(props);
  const { id, name, phone, email } = props.contact;
  return (
    <>
    <Table>
     <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone no</th>
          <th>Edit/Delete</th>
        </tr>
      </thead>
   
        <tbody>
          <tr>
            <td>{id}</td>
            <td><FaUserCircle className="m-1 mb-2" height={"48px"} width={"32px"} />{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td><FaTrashAlt style={{color: 'red'}} onClick={() => props.clickHandler(id)}/> <FaRegEdit className="mx-2"/></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ContactCard;
