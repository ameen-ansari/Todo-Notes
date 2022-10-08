import React, { useState } from 'react'
import home from './Home.module.css'
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setdata] = useState({
    title: "",
    description: ""
  })
  let onchangefunc = (e) => {
    let inputs = { [e.target.name]: e.target.value }
    setdata({ ...data, ...inputs })
  }
  let submit = (e) => {
    e.preventDefault()
    console.log(data)
    setdata({
      title: "",
      description: ""
    })
  }
  let stylishobj1 = { flexDirection: 'column', display: 'flex', boxSizing: 'border-box', alignIitems: 'center', justifyContent: 'center', height: '100vh' }
  return (
    <div>
      <Link to='/SignIn'>
        <button className={`${home.inbtn} btn btn-primary`} >SignIn</button>
      </Link>
      <div className={home.parent1}>
        <form style={stylishobj1} className={`mb-3 ${home.singinform} container`}>
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
    </div>
  )
}
