import React from 'react'
import style from './signin.css'

export default function SignIn() {
  return (
    <div>
      <form action="">
        <label htmlFor="mail">Enter Email</label>
        <input type="email" />
        <label htmlFor="">Enter Password</label>
        <input type="password" />
      </form>
    </div>
  )
}
