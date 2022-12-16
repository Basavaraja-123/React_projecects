import React  from "react" 
import React,{useState} from "react"
import "./App.css"
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";




function App() {
  const [Contacts, setContact ]=useState([]);
  const add Contact Ha
  // const Contacts= [{
  //   id:1,
  //   name:"Chaali",
  //   email:"Chaali@gmail.com"},
  //   {
  //     id:2,
  //     name:"Chaali43",
  //     email:"Chaali43@gmail.com"}];

  return (
    <div className=" ui container ">
      <Header />
      <AddContact/>
      <ContactList Contacts={Contacts} />
      
      
    </div>
  );
}

export default App;
