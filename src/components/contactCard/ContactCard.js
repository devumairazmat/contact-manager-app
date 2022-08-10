import React from "react";
import { FaTrashAlt, FaRegEdit, FaUserCircle } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  // console.log(props);
  const { id, name, phone, email } = props.contact;
  return (
    <>
      <Table>
        <tbody className="shadow-lg">
          <tr className="sahdow-lg">
            <td>{id}</td>
            <td>
              <FaUserCircle
                className="m-1 mb-2"
                height={"48px"}
                width={"32px"}
              />
              {name}
            </td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
              <FaTrashAlt
                style={{ color: "red" }}
                onClick={() => props.clickHandler(id)}
              />{" "}
              <Link to={{ pathname: `/contacts/${id}`, state :{contact:props.contact} }} >
               <FaRegEdit className="mx-2" style={{ color: "blue" }}
               /></Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ContactCard;
