require('dotenv').config()
const { postUser, postLanguage } = require('./knex')
var socket = require('socket.io')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const publicPath = path.join(__dirname, 'public')
const staticMiddleware = express.static(publicPath)
const bcrypt = require('bcrypt')
const saltRounds = 10

app.use(bodyParser.json())
app.use(staticMiddleware)

app.post('/users', (req, res) => {
  const { password } = req.body
  bcrypt.hash(password, saltRounds, function (err, hash) {
    console.log(err)
    req.body.password = hash
    postUser(req.body)
      .then((user) => {
        res.status(201).json(user)
      })
      .catch(error => {
        console.log(error)
        res.sendStatus(500)
      })
  })
})

app.listen(process.env.PORT, () => console.log('listening on: ' + process.env.PORT))
