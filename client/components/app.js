import React, { Component } from 'react'
import SignupForm from './signup-form'
import Navbar from './navbar'
import UserList from './userlist'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3000')

export default class App extends Component {

  componentDidMount() {
    const user = localStorage.getItem('user')
    const userObj = JSON.parse(user)
    if (user === null) {
      return
    }
    else if (localStorage) {
      return
    }
    socket.emit('login', userObj)

  }

  render() {

    return (
      <div className="window">
        <Navbar />
        {(!localStorage.user) ? <SignupForm /> : <UserList />}

      </div>
    )
  }
}
