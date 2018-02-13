var productData = require('../data')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {




      var data = productData.map((product)=>{
        return {
          SKU: product.SKU,
          //DESIGN: product.DESIGN,
          DESCRIPTION: product.DESCRIPTION,
          ACCORDION: product.ACCORDION,
          PLATFORM: product.PLATFORM,
          BARCODE: product.BARCODE,
          //ORDER QTY OF  6: product.ORDER QTY OF  6,
          //FIELD8: product.FIELD8,
          //FIELD9: product.FIELD9,
          STYLE: product.STYLE,
          STATUS: product.STATUS,
        }
      })


      return knex('products').insert(data);
    });
};
