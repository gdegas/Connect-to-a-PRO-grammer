require('dotenv').config()
const knex = require('./knex')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const publicPath = path.join(__dirname, 'public')
const staticMiddleware = express.static(publicPath)

app.use(bodyParser.json())
app.use(staticMiddleware)

app.post('/users', (req, res) => {
  const user = req.body
  knex.postUser(user)
    .then(user => res.status(201).json(user))
    .catch(error => {
      console.log(error)
      res.sendStatus(500)
    })
})

app.listen(process.env.PORT, () => console.log('listening on: ' + process.env.PORT))
