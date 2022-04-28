import React from "react";
import Table from "react-bootstrap/Table";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
   
   const deleteContactHandler=(id)=>{
     props.getContact(id);
   }
    const renderContactList = props.contacts.map((contact, index)=>{
        return(
           <ContactCard  contact={contact} clickHandler={deleteContactHandler}
             key={contact.id}
           />
        );
    })

  return (
    <div style={{margin:"30px auto"}}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {renderContactList}
        </tbody>
      </Table>
    </div>
  );
};

export default ContactList;
