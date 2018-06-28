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
  tenders.findOne({id:req.body.id}, function (err, doc){

  tenders.findByIdAndUpdate(
    doc._id,
    req.body,
    {new: true},
    (err, tend) => {
    // Handle any possible database errors
        console.log(tend);
        if (err) return res.status(500).send(err);
        return res.send(tend);
    }
  )
});
});

module.exports = api;
