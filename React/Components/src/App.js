import "./App.css";
import React from "react";
import Header from "./components/Header";
import User from "./components/User";



// const name = "Mehmet"
// const surname = "Seven"
// const isLoggedIn = true;
const friends =[
  {
    id:1,
    name:"Ahmet",
  },
  {
    id:2,
    name:"Gökhan",
  },
  {
    id:3,
    name:"Tayfun",
  }
]


function App() {
    return ( 
      <>
      <User 
      //name="Mehmet" 
      surname="SSeven" isLoggedIn={true}  age={29} friends={friends} adress={{title: "Bağcılar/Istanbul", zip: 34456}} />

      
      </>
    );
  }
 

export default App;