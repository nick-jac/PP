const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProducts: getProducts,
  insertNewproducts: insertNewProducts
}

function getUsers(testConn) {
  // const conn = testConn || connection
  // return conn('users').select()
}

function getUser(id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id)
}

function getProducts(testConn) {
 const conn = testConn || connection
  return conn('products').select()
}

function insertNewProducts(newProduct) {
console.log(newProduct)
  request
  .post()
  .send({accordion:"", barcode:"", description:"", platform:"", sku:"", status:"", style:""})
  //.end(function(err, res)
}
