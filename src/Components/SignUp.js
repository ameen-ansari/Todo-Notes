import { Link } from "react-router-dom";
import React, { useState } from 'react'
import style1 from './Signup.module.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

export default function SignUp() {
    const [udata, setudata] = useState({
        mail: "",
        password: ""
    })
    let userdata = (e) => {
        let input = {
            [e.target.name]: e.target.value
        }
        setudata({
            ...udata, ...input
        })
    }
    let Sup = async (e) => {
        e.preventDefault()
        setudata({
            mail: "",
            password: ""
        })
        try{
            await createUserWithEmailAndPassword(auth , udata.mail , udata.password)
            alert('Acount Created')
        }catch(e){
            alert(e.message)
        }
    }
    let stylishobj1 = { flexDirection: 'column', display: 'flex', boxSizing: 'border-box', alignIitems: 'center', justifyContent: 'center', height: '100vh' }
    return (
        <div className={style1.parent1}>
            <form style={stylishobj1} className={`mb-3 ${style1.singinform} container`}>
                <p className={style1.p1}>Sign-up Form</p>
                <div className={` ${style1.p2}`}>
                    <div className="m-2 ">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onChange={userdata} name="mail" udata={udata.mail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email Here' />
                    </div>
                    <div className="m-2 ">
                        <label htmlFor="exampleInputEmail2" className="form-label">UserName</label>
                        <input type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder='Enter Name Here' />
                    </div>
                </div>
                <div className={` ${style1.p2}`}>
                    <div className="m-2 ">
                        <label htmlFor="exampleInputEmail3" className="form-label">Phone #</label>
                        <input type="number" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder='Phone Number' />
                    </div>
                    <div className="m-2 ">
                        <label htmlFor="exampleInputEmail3" className="form-label">Password</label>
                        <input onChange={userdata} name="password" value={udata.password} type="password" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder='Enter Password Here' />
                    </div>
                </div>
                <div className={`mb-3 ${style1.p3}`}>
                    <button type="submit" className="m-2 btn btn-primary" onClick={Sup}>Submit</button>
                    <Link to='/SignIn'>
                        <button className="m-2 btn btn-primary">SignIn</button>
                    </Link>
                </div>
            </form>
        </div >
    )
}
