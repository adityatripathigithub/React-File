import React, { useState } from 'react'

const App = () => {


  // const [name, setname] = useState("Hello Mera Name")
  // const hendchange = () => {

  //   setname(name + " ADITYA TRIPATHI Hai")

  // }


  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [data, setdata] = useState({})

  let clutter = ''
  const handelclick = (e) => {

    e.preventDefault()
    setdata({ name, age, email })

  }


  return (
    //     <div>

    //       <button onClick={hendchange} >Create Your Full Name</button>

    //       <h1>{name}</h1>


    //     </div>
    //   )

    // }

    <>
      <form action="">
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" value={age} onChange={e => setAge(e.target.value)} />
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
        <button onClick={e => handelclick(e)}>submit</button>
      </form>

      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
      <h1>{data.email}</h1>
    </>

  )
}


export default App;