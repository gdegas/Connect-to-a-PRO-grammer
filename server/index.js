require('dotenv').config()
const { postUser } = require('./knex')
const socket = require('socket.io')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const publicPath = path.join(__dirname, 'public')
const staticMiddleware = express.static(publicPath)
const bcrypt = require('bcrypt')
const saltRounds = 10
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(bodyParser.json())
app.use(staticMiddleware)

app.post('/users', (req, res) => {
  const { password } = req.body
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      console.log(err)
    }
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

const userList = []

io.on('connection', function (socket) {
  socket.emit('broadcast', userList)

  socket.on('login', function (data) {
    userList.push(data)
    console.log('user logged in', userList)
    const userPosition = userList.length - 1
    socket.userPosition = userPosition
    io.sockets.emit('broadcast', userList)
  })

  socket.on('disconnect', function (data) {
    console.log('before splice', userList)
    userList.splice(socket.userPosition, 1)
    console.log('after splice', userList)

    io.sockets.emit('broadcast', userList)
  })

})

http.listen(process.env.PORT, () => console.log('listening on: ' + process.env.PORT))
