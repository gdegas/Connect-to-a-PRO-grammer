require('dotenv').config()

const knex = require('knex')({
  dialect: 'pg',
  connection: process.env.DATABASE_URL
})

function postUser(user) {
  const query = knex
    .insert(user)
    .into('users')
    .returning('*')

  return query
}

module.exports = {
  postUser
}
