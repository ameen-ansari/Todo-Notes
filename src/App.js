import React, { useEffect, useState } from 'react'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Home from './Components/Home'
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
// import Card from './Components/Card';
export default function App() {
  const [myu, setmyu] = useState("")
  useEffect(onAuthStateChanged(auth, (user) => {
    setmyu(user)
  }), [myu])

  return (
    <div>
      <Routes>
        <Route path='SignIn' element={<SignIn />} />
        <Route path='/' element={<Home uname={myu.email}/>} />
        <Route path='SignUp' element={<SignUp />} />
      </Routes>
      {/* <Card /> */}
    </div>
  )
}
