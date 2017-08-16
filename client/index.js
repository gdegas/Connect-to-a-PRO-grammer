import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

const $app = document.getElementById('app')

function render() {
  ReactDOM.render(
    <App />,
    $app
  )
}

render()
