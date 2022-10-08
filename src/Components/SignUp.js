import React from 'react'
import style1 from './Signup.module.css'

export default function SignUp() {
    let stylishobj1 = { flexDirection: 'column', display: 'flex', boxSizing: 'border-box', alignIitems: 'center', justifyContent: 'center', height: '100vh' }
    return (
        <div className={style1.parent1}>
            <p className={style1.p1}>Sign-up Form</p>
            <form style={stylishobj1} className={`mb-3 ${style1.singinform} container`}>
                <div className="mb-3 d-flex">
                    <div className="m-2 ">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="m-2 ">
                        <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                </div>
                <div className="mb-3 d-flex">
                    <div className="m-2 ">
                        <label htmlFor="exampleInputEmail3" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="m-2 ">
                        <label htmlFor="exampleInputEmail3" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                </div>
                <div className="mb-3 form-check">
                    <p className="form-check-label" htmlFor="exampleCheck1">Forget Password</p>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div >
    )
}
