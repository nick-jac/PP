import request from 'superagent'

const productUrl = 'http://:3000/api'

export function getProduct (callback) {
  request
    .get(productUrl)
    .end ((err, res) => {
        callback(err, res.body)
    })
}

export function addProduct (product, callback) {
console.log('api', product)
  request
    .post(productUrl)
    .send(product)
    .end((err, res) => {
      err && console.log('error', err)
      callback(res)
    })
}

module.exports = [
  addProduct: addProduct
]
