import React from 'react'
import './App.css';
import{Routes,Route,Navigate} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ContactList from './components/contacts/ContactsList/ContactList';
import Addcontact from './components/contacts/AddContacts/Addcontact';
import ViewContact from './components/contacts/ViewContacts/ViewContact';
import EditContact from './components/contacts/EditContacts/EditContact';

function App() {
  return (
    <React.Fragment>
    
   
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Navigate to={'/Contacts/List'} />} />
        <Route path={"/Contacts/List"} element={<ContactList/>} />
        <Route path={"/Contacts/Add"} element={<Addcontact/>} />
        <Route path={"/Contacts/View/:ContactID"} element={<ViewContact/>} />
        <Route path={"/Contacts/Edit/:ContactID"} element={<EditContact/>} />

       
      </Routes> 

        
       
        
       
    
    </React.Fragment>
  );
}

export default App;
