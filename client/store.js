import { createStore } from 'redux'
import reducer from './reducer'

const languages = []
const username = (localStorage.getItem('username'))

const store = createStore(reducer, { user: { username, languages } })

export default store
