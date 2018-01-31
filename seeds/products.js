var productData = require('../data')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {

      //console.log(productData)

  //     { SKU: '101000 ',
  // DESIGN: '',
  // DESCRIPTION: 'Black',
  // ACCORDION: 'Black ',
  // PLATFORM: 'Black',
  // BARCODE: '859184004454',
  // 'ORDER QTY PACK OF  6': '',
  // FIELD8: '',
  // FIELD9: '',
  // STYLE: 'Colours',
  // STATUS: '' }


      var data = productData.map((product)=>{
        return {
          SKU: product.SKU,
          DESCRIPTION: product.DESCRIPTION,
          ACCORDION: product.ACCORDION,
        }
      })

      // Inserts seed entries
      return knex('products').insert(data);
    });
};
