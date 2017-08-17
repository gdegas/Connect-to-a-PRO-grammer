import React, {Component} from 'react'
import socket from '../socket'

export default class SignupForm extends Component {
  constructor(props) {
    super(props)

    this.state = { user: {} }

    this.handleData = this.handleData.bind(this)
  }

  handleData(event) {
    event.preventDefault()
    const formData = new FormData(event.target)

    const languages = formData.getAll('languages')
    const newLanguages = languages.map(language => {
      switch (language) {
        case '1':
          language = 'Javascript'
          break
        case '2':
          language = 'HTML'
          break
        case '3':
          language = 'SQL'
          break
        case '4':
          language = 'Java'
          break
        case '5':
          language = 'CSS'
          break
        case '6':
          language = 'Ruby'
          break
        case '7':
          language = 'Python'
          break
        default:
          language = 'No Languages'
      }
      return language
    })

    const typedData = {
      username: formData.get('username'),
      password: formData.get('password'),
      languages: formData.getAll('languages')
    }
    if (formData.get('radio') === 'mentor') {
      typedData.mentor = true
    }
    else {
      typedData.mentor = false
    }

    fetch('/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(typedData)
    })
    .then(response => {
      socket.emit('login', {username: typedData.username, languages: newLanguages, mentor: typedData.mentor})
      localStorage.setItem('user', JSON.stringify({username: typedData.username, languages: newLanguages, mentor: typedData.mentor}))
      return response.json()
    })
    .then(() => {
      this.props.changeView(typedData)
    })
    .catch(err => console.log(err))

  }

  render() {
    return (
      <div className="container">
        <form id="signupForm" onSubmit={this.handleData} className="form rounded col-sm-6 offset-sm-3">
          <h3 className="text-center">Create a Profile</h3>
          <div className="form-group row">
            <label htmlFor="InputUsername" className="col-form-label">Username</label>
            <input type="username" className="form-control" id="InputUsername" placeholder="Username" name="username" />
          </div>
          <div className="form-group row">
            <label htmlFor="InputPassword1" className="col-form-label">Password</label>
            <input type="password" className="form-control" id="InputPassword1" placeholder="Password" name="password"/>
          </div>
          <fieldset className="form-group row text-center">
            <legend className="col-form-legend">Choose your role:</legend>
            <div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" name="radio" id="mentorRadio" value="mentor" />
                  I&apos;m a mentor
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" name="radio" id="menteeRadio" value="mentee" />
                  I&apos;m a mentee
                </label>
              </div>
            </div>
            </fieldset>
            <h5>Select languages you wish to teach/learn</h5>
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" name="languages" type="checkbox" id="checkboxHtml" value="2" /> HTML
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" name="languages" type="checkbox" id="checkboxCss" value="5" /> CSS
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" name="languages" type="checkbox" id="checkboxJavascript" value="1" /> Javascript
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" name="languages" type="checkbox" id="checkboxRuby" value="6" /> Ruby
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" name="languages" type="checkbox" id="checkboxPython" value="7" /> Python
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" name="languages" type="checkbox" id="checkboxPython" value="4" /> Java
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" name="languages" type="checkbox" id="checkboxPython" value="7" /> SQL
              </label>
            </div>
          <div className="text-center">
            <button type="submit" className="btn btn-secondary">Create Profile</button>
          </div>
        </form>
      </div>
    )
  }
}
