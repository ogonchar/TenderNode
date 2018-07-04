var express = require('express');
var api = express.Router();
let tenders = require('../model/tenderSchema.js')


api.get('/getAllTenders', (req, res) => {
  tenders.find( function(err,tender) {
       if (err) {res.send(err);}
       res.send(tender);
     });
});
api.post('/addTender', (req, res) => {
  const tend = new tenders(req.body);
  tend.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newTodoObj)}
  );
  console.log(req.body);
});
api.put('/editTender', (req, res) => {
  console.log(req.body.tender._id);
  tenders.findByIdAndUpdate(

    req.body.tender._id,
    req.body.tender,
    {new: true},
    (err, tend) => {
    // Handle any possible database errors
        console.log(tend);
        if (err) return res.status(500).send(err);
        return res.send(tend);
    }
  )
});


module.exports = api;
