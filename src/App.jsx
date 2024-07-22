import React, { useState } from 'react'

const App = () => {


  const [name, setname] = useState("Hello Mera Name")
  const hendchange = () => {

    setname(name + " ADITYA TRIPATHI Hai")

  }

  return (
    <div>

      <button onClick={hendchange} >Create Your Full Name</button>

      <h1>{name}</h1>


    </div>
  )

}


export default App;