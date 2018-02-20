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

router.post('/', function(req, res){
  db.insertNewProducts(req.body)
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

module.exports = router
