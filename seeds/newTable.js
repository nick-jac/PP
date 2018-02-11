var newTableData = require('../location')

exports.seed = function(knex, Promise) {
  return knex('newTable').del()
  .then(function () {
  return Promise.all([
    knex(location).insert({id: , location: ccc.ccc})
   ])
 })
}
