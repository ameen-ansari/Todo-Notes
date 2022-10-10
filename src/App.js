import React, { useEffect, useState } from 'react'
import './App.css'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Home from './Components/Home'
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './Firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
// import Card from './Components/Card';
export default function App() {
  const [myu, setmyu] = useState("")
  const [user1, setuser1] = useState("")
  const [indicate, setindicate] = useState("Loading")
  onAuthStateChanged(auth, (user) => {
    setmyu(user)
  })
  useEffect(() => {
    if (myu) {
      setindicate('LogOut')
    } else {
      setindicate('LogIn')
    }
  }, [myu])
  useEffect(() => {
    if (myu) {
      let getq = async () => {
        let q = query(collection(db, "users"), where("uid", '==', auth.currentUser.uid))
        let qe = await getDocs(q)
        qe.forEach((e) => {
          setuser1(`Welcome ${e.data().UserName}`)
        })
      }
      getq()
    } else {
      setuser1('Please LogIn')
    }
  }, [indicate])
  useEffect(() => {
    setindicate('Loading')
    setuser1('Loading')
  }, [])
  return (
    <div>
      <Routes>
        <Route path='SignIn' element={<SignIn />} />
        <Route path='/' element={<Home uname={user1} btnm={indicate} />} />
        <Route path='SignUp' element={<SignUp />} />
      </Routes>
      {/* <Card /> */}
    </div>
  )
}
