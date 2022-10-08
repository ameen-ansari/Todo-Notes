import React from 'react'
import styl from './Signin.module.css'
import { Link } from "react-router-dom";

export default function SignIn() {
  let stylishobj1 = { flexDirection: 'column', display: 'flex', boxSizing: 'border-box', alignIitems: 'center', justifyContent: 'center'  , height: '100vh' }
  return (
    <div className={styl.parent1}>
      <Link to='/SignUp'>
        <button className={`${styl.inbtn} btn btn-primary`} >SignUp</button>
        </Link>
      <p className={styl.p1}>SignIn Form</p>
      <form style={stylishobj1} className={`mb-3 ${styl.singinform} container`}>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 ">
          <p htmlFor="exampleInputPassword1" className={styl.fp}>Forgot Password</p>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div >
  )
}
