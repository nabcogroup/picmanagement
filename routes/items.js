var express = require('express');
var router = express.Router();


const ItemRawRepository = require('../repositories/ItemRawRepository');

router.get('/',function(req,res,next) {
    
    var repo = new ItemRawRepository();
    
    res.send(repo.all());
    
})

router.get('/:id', (req,res) => {
    res.send(req.params);
});

module.exports = router;