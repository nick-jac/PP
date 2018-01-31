
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(table) {
    table.increments()
    table.integer('SKU')
    table.string('DESIGN')
    table.string('DESCRIPTION')
    table.string('ACCORDION')
    table.string('PLATFORM')
    table.integer('BARCODE')
    table.integer('ORDER QTY PACK OF  6')
    table.string('FIELD8')
    table.string('FIELD9')
    table.string('STYLE')
    table.string('STATUS')
    table.timestamps()
})
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('products')
};
