const expect = require('expect.js');
var Item = require('../model').Item

describe('model implemation', function() {

  it('provides a working model object', function(done) {

    var item = new Item( {
      Name: 'Apple Mac Book Pro',
      Model : 'Mac Book Pro',
      Price : 350000,
      Description : 'Brand new mac book pro'
    });

    expect(item).to.be.ok();
    done()

  });

});
