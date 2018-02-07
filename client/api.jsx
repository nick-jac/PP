import request from 'superagent'

const productUrl = 'http://:3000'

export function getProduct (callback) {
  request
    .get(productUrl)
    .end ((err, res) => {
        callback(err, res.body)
    })
}

export function updateProduct (product, callback) {
  request
    .post(productUrl)
    .send(product)
    .end((err, res) => {
      callback(err)
    })
}
