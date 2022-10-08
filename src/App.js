import React from 'react'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Home from './Components/Home'
import { Routes, Route } from "react-router-dom";
import Card from './Components/Card';

export default function App() {
  return (
    <div>
    <Routes>
    <Route path='SignIn' element={<SignIn/>} />
    <Route path='/' element={<Home/>} />
    <Route path='SignUp' element={<SignUp/>} />
    </Routes>
    <Card />
    </div>
  )
}
