require('dotenv').config()

const knex = require('knex')({
  dialect: 'pg',
  connection: process.env.DATABASE_URL
})

function postUser(userData) {
  const query = knex
    .insert(userData)
    .into('users')
    .returning('*')

  return query
}

function postLanguage(userData) {
  const query = knex
    .insert(userData)
    .into('languages')
    .returning('*')

  return query
}

module.exports = {
  postUser,
  postLanguage
}
