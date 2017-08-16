import React, { Component } from 'react'
import socket from '../socket'

export default class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {mentors: [], mentees: []}
  }

  componentDidMount() {
    socket.on('broadcast', (userList) => {
      const mentors = userList.filter(user => user.mentor === true)
      const mentees = userList.filter(user => user.mentor === false)
      this.setState({mentors, mentees})
    })
  }

  render() {
    return (
      <div className="user-cards">
        <h3 className="role-title">Mentors ({this.state.mentors.length} online)</h3>
        <div className="mentor-list row user-lists">
          <div className="card-deck">
          {this.state.mentors.map((user, i) => {
            return (<div key={ i } className="card text-center">
                      <img className="card-img-top" id="user-image" src="/images/user.png" alt="Card image" />
                      <div className="card-block">
                        <h4 className="card-title">{user.username}</h4>
                        <ul className="list-group list-group-flush">{user.languages.map((language, i) => {
                          return <li className="list-group-item" key={ i }>{language}</li>
                        })}
                        </ul>
                      </div>
                      <div className="card-footer">
                        <a href="#" className="btn btn-primary card-link">Chat with me</a>
                      </div>
                    </div>)
          })}
          </div>
        </div>
        <h3 className="role-title">Mentees ({this.state.mentees.length} online)</h3>
        <div className="mentee-list row user-lists">
          <div className="card-deck">
            {this.state.mentees.map((user, i) => {
              return (<div key={ i } className="card text-center">
                        <img className="card-img-top" id="user-image" src="/images/user.png" alt="Card image" />
                        <div className="card-block">
                          <h4 className="card-title">{user.username}</h4>
                          <ul className="list-group list-group-flush">{user.languages.map((language, i) => {
                            return <li className="list-group-item" key={ i }>{language}</li>
                          })}
                          </ul>
                        </div>
                        <div className="card-footer">
                          <a href="#" className="btn btn-primary card-link">Chat with me</a>
                        </div>
                      </div>)
            })}
          </div>
        </div>
      </div>

    )
  }
}
