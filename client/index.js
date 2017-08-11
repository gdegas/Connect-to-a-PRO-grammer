import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import store from './store'
import { App } from './components/app'

const $app = document.getElementById('app')

function render() {
  ReactDOM.render(
    <App />,
    $app
  )
}

render()
