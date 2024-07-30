import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

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

      {/* <Routes>

        <Route path='/' element= {<Home />} />    

      </Routes> */}

<h1 className='bg-red-300'>rajdka</h1> 

      <form  className='bg-slate-500 p-10 flex gap-2' action="">
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" value={age} onChange={e => setAge(e.target.value)} />
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
        <button className='hover:bg-green-500 hover:text-black' onClick={e => handelclick(e)}>Submit</button>
      </form>

      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
      <h1>{data.email}</h1>
    </>

  )
}


export default App;