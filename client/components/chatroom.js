import React, {Component} from 'react'
import ChatInput from './chat-input'

export default class Chatroom extends Component {
  constructor(props) {
    super(props)
    this.state = { messages: [] }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const message = formData.get('chat-input')
    const messages = this.state.messages
    this.setState({ messages: messages.concat(message) })
    event.target.reset()
  }

  render() {
    console.log(this.state.messages)
    return (
      <div className="chatroom">
          <div className="col-sm-6">
            <div className="card chat-panel">
              <div className="card-header">
                Chatroom
              </div>
              <div className="card-block">
                {
                  this.state.messages.map((message, i) => {
                    return (
                    <p className="card-text" key={ i }>{message}</p>
                    )
                  })
                }
              </div>
              <ChatInput inputValue={this.handleInput} />
            </div>
          </div>
      </div>
    )
  }
}
