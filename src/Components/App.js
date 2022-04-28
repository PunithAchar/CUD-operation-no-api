import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { v4 } from 'uuid';
// import { v4 as uuidv4 } from 'uuid';
import AddContacts from './AddContacts';
import './App.css'
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE= "fest"
  const [contacts, setContacts]= useState([]);


  const addContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts,{id: v4(), ...contact}]);
  }

  const removeContactHandler=(id)=>{
    const newContactlist=contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContactlist)
  };

  useEffect(()=>{
   const retriveData=JSON.parse(localStorage.getItem(LOCAL_STORAGE));
   if(retriveData) setContacts(retriveData);
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE,JSON.stringify(contacts));
  },[contacts])
      
  return (
    <div className="App" >
       <h1>Contact App</h1>
      <AddContacts addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContact={removeContactHandler}/>
    </div>
  );
}

export default App;
