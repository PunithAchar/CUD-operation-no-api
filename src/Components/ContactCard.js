import React from "react";
import Button from "react-bootstrap/Button";

const ContactCard = (props) => {
  const { id, name, email, index } = props.contact;
  return (
    <tr key={index}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>
     
        <Button variant="success" onClick={()=>props.clickHandler(id)}>Edit</Button>
     
        <Button variant="danger" onClick={()=>props.clickHandler(id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ContactCard;
