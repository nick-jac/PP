const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', function (req, res) => {
  db.getProduct()
  .then(db.newProduct()
res.render('products', {id})
})
.catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)

module.exports = router
