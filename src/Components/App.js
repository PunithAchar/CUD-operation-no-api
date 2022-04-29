import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { v4 } from 'uuid';
// import { v4 as uuidv4 } from 'uuid';
import AddContacts from './AddContacts';
import './App.css'
import ContactList from './ContactList';
import api from "../api/contacts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const LOCAL_STORAGE= "fest"
  const [contacts, setContacts]= useState([]);

  //RetriveContacts
  const retriveContacts= async ()=>{
    const response = await api.get("/contacts");
    return response.data;
  }

  const addContactHandler= async (contact)=>{
    console.log(contact);
    const request ={
      id: v4(),
      ...contact
    };
    const response = await api.post('/contacts', request);
    setContacts([...contacts, response.data]);
  }

  const removeContactHandler= async(id)=>{
   await api.delete(`/contacts/${id}`);
    const newContactlist= contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContactlist)
  };

  useEffect(()=>{
  //  const retriveData=JSON.parse(localStorage.getItem(LOCAL_STORAGE));
  //  if(retriveData) setContacts(retriveData);
     
     const getAllContacts = async()=>{
       const allContacts = await retriveContacts();
       if(allContacts) setContacts(allContacts);
     }

     getAllContacts();

  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE,JSON.stringify(contacts));
  },[contacts])
      
  return (
   
    <div className="App" >
       <h1>Contact App</h1>
       <AddContacts  addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContact={removeContactHandler}/>
    </div>
   
  );
}

export default App;
