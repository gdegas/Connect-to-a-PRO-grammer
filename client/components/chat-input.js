import React from 'react'

export default function ChatInput(props) {
  return (
    <form className="card-footer" onSubmit={props.inputValue}>
      <input id="chat-input" name="chat-input" type="text"/>
    </form>
  )
}
