
import React from "react";
import {useState} from "react"
import './../styles/App.css';



const App = () => {
  let [name,setname]=useState("")
  return (
    <div>
      <input type="text" placeholder="Enter name " onChange={(e)=>
        setname(e.target.value)
      }/>
      <p >{name}</p>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
