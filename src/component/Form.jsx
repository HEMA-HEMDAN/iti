import React from 'react'
import { useRef, useState } from 'react'

const Form = () => {
    const userRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef = useRef(null)
    const [user, setUser] = useState()
    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userRef.current.value)
        console.log(emailRef.current.value)
        console.log(messageRef.current.value)
    }

  return (
    <form className='flex flex-col gap-2 justify-center items-center h-screen' onSubmit={handleSubmit}>
      <label htmlFor="name">Name {user}</label>
      <input type="text" id="name" name="name"  ref={userRef} required onChange={(e) => setUser(e.target.value)}/>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" ref={emailRef} required />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" ref={messageRef}></textarea>
      <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Send</button>
    </form>
  )
}

export default Form

