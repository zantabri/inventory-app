const express = require('express');
const router = express.Router();
const ItemService = require('../services/ItemService');
const _ = require('underscore');

const isMongoError = function(err) {

  if(err.errors && _.keys(err.errors).length > 0 ) 
    return true;

  return false

}

const getErrorMessages = function(err) {

  var msgs = []

  for (var path in err.errors) {
    msgs.push(err.errors[path].message)
  }

  return msgs;

}

const errorHandler = function(req,res) {
   
  return function(err) {


    if(!isMongoError) {

      res.status(500);
      res.json( { error :  { messages : [ 'Unexpected error occured' ] } });
      return res.end()

    }

    var msgs = getErrorMessages(err);
    res.status(400)
    res.json({ error : { messages : msgs } });
    return res.end()

  }

}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/items', function(req,res,next) {

   ItemService
   .getAllItems()
   .then(function(items) {
    
     res.status(200)
     res.json(items)
     res.end()

   }).catch(errorHandler(req,res));
   
});

router.post('/items', function(req,res,next) {

  ItemService
  .createItem(req.body)
  .then(function(newObject) {
     
      res.status(201);
      res.json(newObject)
      res.end();

   })
   .catch(errorHandler(req,res));

});

module.exports = router;
