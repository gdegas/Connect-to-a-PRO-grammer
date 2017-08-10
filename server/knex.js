require('dotenv').config()

const knex = require('knex')({
  dialect: 'pg',
  connection: process.env.DATABASE_URL
})

function postUser({ username, password, mentor, languages }) {
  const query = knex
    .insert({username: username, password: password, mentor: mentor})
    .into('users')
    .returning('*')
    .then((user) => {
      const query = knex
        .insert(createObj(user[0].id, languages))
        .into('users_languages')
        .returning('*')
      return query
    })
  return query
}

function createObj(userId, languageIds) {
  const objArray = []
  for (let i = 0; i < languageIds.length; i++) {
    const obj = {user_id: userId, language_id: languageIds[i]}
    objArray.push(obj)
  }
  return objArray
}

module.exports = {
  postUser
}
