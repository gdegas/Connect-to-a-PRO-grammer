import React, { Component } from 'react'
import SignupForm from './signup-form'
import Navbar from './navbar'
import UserList from './userlist'
import socket from '../socket'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { views: [] }
    this.changeView = this.changeView.bind(this)
  }

  componentDidMount() {
    const user = localStorage.getItem('user')
    const userObj = JSON.parse(user)
    if (user === null) {
      return
    }
    socket.emit('login', userObj)
  }

  changeView() {
    this.setState({views: ['userList']})
  }

  render() {

    return (
      <div className="window">
        <Navbar />
        {(!localStorage.user || !this.state.views.length) ? <SignupForm changeView={this.changeView}/> : <UserList />}
      </div>
    )
  }
}
