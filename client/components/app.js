import React from 'react'
import SignupForm from './signup-form'
import Navbar from './navbar'

export const App = () => {
  return (
    <div className="window">
      <Navbar />
      {(!localStorage.username) ? <SignupForm /> : null}
    </div>
  )
}
