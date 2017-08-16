import React, { Component } from 'react'
import SignupForm from './signup-form'
import Navbar from './navbar'
import UserList from './userlist'
import socket from '../socket'
import Chatroom from './chatroom'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { currentView: null, isChatopen: false, chattingWith: null }
    this.showUserList = this.showUserList.bind(this)
    this.openChat = this.openChat.bind(this)
  }

  componentDidMount() {
    const user = localStorage.getItem('user')
    const userObj = JSON.parse(user)
    if (user === null) {
      this.setState({currentView: 'signupForm'})
    }
    else {
      this.setState({currentView: 'userList'})
      socket.emit('login', userObj)
    }

  }

  showUserList() {
    this.setState({currentView: 'userList'})
  }

  openChat(user) {
    this.setState({currentView: 'chatRoom', isChatOpen: true, chattingWith: user})
  }

  render() {
    return (
      <div className="window">
        <Navbar />
        {this.state.currentView === 'signupForm' && <SignupForm changeView={this.showUserList}/>}
        {this.state.currentView === 'userList' && <UserList openChat={this.openChat}/>}
        {this.state.currentView === 'chatRoom' && <Chatroom theirUsername={this.state.chattingWith.username}/>}
      </div>

    )
  }
}
