import React, { useState } from 'react'

const App = () => {

  const [aditya, setaditya] = useState("Bhai")
  const handchange = () => {
  }


  return (
    <div>
      <h1 onClick={handchange}>mere dosto</h1>
      <h1>{aditya}</h1>

    </div>
  )
}

export default App ;