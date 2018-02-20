const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', function(req, res) {
  db.getProducts()
  .then(function(data){
    res.json(data)
    console.log(data)
  })
})

router.post('/', (req, res) => {
  const newProduct = req.body
  console.log('api.js', req.body)
  db.addProduct(newProduct)
  .then(function(ids){
    res.json(ids)
  //.insert(newProduct, [sku])
  })
  //db.addProduct(req.body)
  //console.log(req, req.body)
  //res.send("ok")
})

// router.get('/', function (req, res){
//   //console.log(req, req.body)
//   res.json(db.getProducts())
// })

router.get('/', (req, res) => {
  db.getProducts()
    .then(products => {
      res.render('index', { products: products })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
module.exports = router
