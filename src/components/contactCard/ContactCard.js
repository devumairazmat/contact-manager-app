import React from "react";
import { FaTrashAlt, FaRegEdit, FaUserCircle } from "react-icons/fa";
import Table from "react-bootstrap/Table";

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
              <FaRegEdit className="mx-2" />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ContactCard;
