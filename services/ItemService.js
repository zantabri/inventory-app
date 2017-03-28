const Item = require('../model.js').Item


exports.createItem = function(item) {

  return new Promise(function(resolve,reject) {

    var itm = new Item(item);
    itm.save(function(err,obj) {
       if(err) {
         return reject(err);
       }
       resolve(obj);
    });

 });

}

exports.getItem = function(id) {

  return new Promise(function(resolve,reject) {
     //TODO implement
 });

}


exports.getAllItems = function() {

  return new Promise(function(resolve,reject) {

   Item
   .find()
   .exec(function(err, items) {
      if(err) {
        return reject(err);
      }
      resolve(items);
    });

 });

}
