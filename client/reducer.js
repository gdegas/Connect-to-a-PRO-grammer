
export default function user(state = {username: '', languages: [], isOn: false}, action) {
  switch (action.type) {
    case 'USER_ON':
      return { username: action.payload.username, isOn: true, languages: action.payload.languages }
    default:
      return state
  }
}
