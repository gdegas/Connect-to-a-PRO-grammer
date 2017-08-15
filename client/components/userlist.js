import React, { Component } from 'react'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3000')

export default class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {users: []}
  }

  componentDidMount() {
    socket.on('broadcast', (userList) => {
      this.setState({users: userList})
    })
  }

  render() {
    return (
      <div className="userList">
        <div className="card-deck">
        {this.state.users.map((user, i) => {
          return (<div key={ i } className="card col-sm-3">
                    <img className="card-img-top img-thumbnail" id="user-image" src="/images/user.png" alt="Card image" />
                    <div className="card-block">
                      <h4 className="card-title">{user.username}</h4>
                      <ul className="list-group list-group-flush">{user.languages.map((language, i) => {

                        return <li className="list-group-item" key={ i }>{language}</li>
                      })}
                      </ul>
                      <a href="#" className="btn btn-primary">Chat with me</a>
                    </div>
                  </div>)
        })}
        </div>
      </div>

    )
  }
}
