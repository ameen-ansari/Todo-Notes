import React, { useEffect, useState } from 'react'
import home from './Home.module.css'
import Card from './Card.js'
import { Link } from "react-router-dom";
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../Firebase';
var userdata = []
export default function Home(props) {
  const [data, setdata] = useState({
    title: "",
    description: ""
  })
  let onchangefunc = (e) => {
    let inputs = { [e.target.name]: e.target.value }
    setdata({ ...data, ...inputs })
  }
  let submit = async (e) => {
    let myUser = auth.currentUser.uid
    e.preventDefault()
    console.log(data)
    setdata({
      title: "",
      description: ""
    })
    try {
      await addDoc(collection(db, myUser), data)
      userdata = []
    } catch (e) {
      alert(e.message)
    }
  }
  let stylishobj1 = { flexDirection: 'column', display: 'flex', boxSizing: 'border-box', alignIitems: 'center', justifyContent: 'center', height: '100vh' }
  return (
    <div>
      <Link to='/SignIn'>
        <button className={`${home.inbtn} btn btn-primary`} >SignIn</button>
      </Link>
      <div className={home.parent1}>
        <form style={stylishobj1} className={`mb-3 ${home.singinform} container`}>
          <p className={home.unam}>Welcome <span>{props.uname}</span></p>
          <p className={home.p1}>My Notes</p>
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">Add Title</label>
            <input type="text" name="title" value={data.title} onChange={onchangefunc} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Title Here' />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
            <textarea cols="30" name="description" value={data.description} onChange={onchangefunc} rows='5' placeholder='Enter Description Here' className="form-control" id="exampleInputPassword1" />
          </div>
          <button onClick={submit} className="btn btn-primary">Add Note</button>
        </form>
      </div >
      <Card mm={props.nn}/>
    </div>
  )
}
export { userdata }
