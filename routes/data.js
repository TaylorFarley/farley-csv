let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// meal Model
let dataSchema = require('../models/data');

// CREATE meal
router.route('/loadData').post((req, res, next) => {  
  console.log(req.body)
  dataSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {   
      res.json(data)
    }
  })
});

router.route('/showData').get((req, res) => {
  dataSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
    
      res.json(data)   
    
    }
  })
})









  


module.exports = router;