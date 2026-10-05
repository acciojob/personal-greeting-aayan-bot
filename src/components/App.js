
import React from "react";
import {useState} from "react"
import './../styles/App.css';



const App = () => {
  let [name,setname]=useState("")
  let greet= name!=""? `Hello, ${name}!` : "Please enter your name";
  return (
    <div>
      <input type="text" placeholder="Enter name " onChange={(e)=>
        setname(e.target.value)
      }/>
      <p >{greet}</p>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
