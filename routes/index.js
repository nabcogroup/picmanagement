



var express = require('express');
var router = express.Router();


const ItemRawRepository = require('../repositories/ItemRawRepository');

/* GET home page. */
router.get('/', function(req, res, next) {

  var repo = new ItemRawRepository();
  
  res.send(repo.items);

});

module.exports = router;
