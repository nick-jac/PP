
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('newTable', function(table) {
      table.increments()
      table.string('LOCATION')
    })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('newTable')
}
