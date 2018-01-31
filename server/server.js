const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
// const userRoutes = require('./routes/users')

const server = express()

// Middleware

server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, '../public')))

// Routes

// server.use('/', userRoutes)

const knex = require('knex')
var config = require('../knexfile').development
var db = knex(config)

server.set('db', db)

server.use('*', (req, res) => {
  res.send("Hello")
})

module.exports = server
