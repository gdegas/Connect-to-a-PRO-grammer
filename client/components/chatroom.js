import React, {Component} from 'react'

export default class Chatroom extends Component {
  render() {
    return (
      <div className="chatroom">
          <div className="col-sm-6 ">
            <div className="card chat-panel">
              <div className="card-header">
                Chatroom
              </div>
              <div className="card-block">

              </div>
              <input className="card-footer" type="text"/>
            </div>
          </div>
      </div>
    )
  }
}
