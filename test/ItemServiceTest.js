const expect = require('expect.js');
const ItemService = require('../services/ItemService.js');
const Item = require('../model.js').Item;

describe('Item Service functionalities', function() {

  before('create test data', function(done) {

     var Item1 = new Item({ Name : 'Item1', Model : 'Test', Price: 10.50   });
     Item1.save()

     var Item2 = new Item({ Name : 'Item2', Model : 'Test', Price: 10.50   });
     Item2.save()

     var Item3 = new Item({ Name : 'Item3', Model : 'Test', Price: 10.50   });
     Item3.save()

     var Item4 = new Item({ Name : 'Item4', Model : 'Test', Price: 10.50   });
     Item4.save()

     done();

  });


  it('gets all items in the database', function(done) {

     ItemService
     .getAllItems()
     .then(function(items) {

        //console.log(JSON.stringify(items));
        expect(items).to.be.ok()
        expect(items.length).to.eql(3)
        done()

     })
     .catch(done);


  })


  after('clears database', function(done) {

   Item
   .find()
   .remove(function(err) {
    if(err)
     return done(err);
    done()
   });


  });

});
