var newTableData = require('../location')

exports.seed = function(knex, Promise) {
  return knex('newTable').del()
  .then(function () {
  return knex('newTable').insert([
      {id: '', location: '' })
   ])
 })
}
