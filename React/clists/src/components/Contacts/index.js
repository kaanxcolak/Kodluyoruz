import List from "./List";
import Form from "./Form";
import {useState,useEffect} from "react";
import "./styles.css";

function Contacts() {
    const [contacts, setContacts] = useState([  
    {
        fullname:"Mehmet",
        phone_number:"123123",
    },{
        fullname:"Kaan",
        phone_number:"321321",

    },{
        fullname:"Ayşe",
        phone_number:"45665454",
    }]);
  



    useEffect(() => {
    }, [contacts]);

  return (
    <div id="container">
    <h1>Contacts List</h1>
    <List contacts={contacts} />
    <Form addContact = {setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;