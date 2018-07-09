var express = require('express');
var api = express.Router();
let tenders = require('../model/tenderSchema.js')

//Tenders
api.get('/getAllTenders', (req, res) => {
  tenders.find( function(err,tender) {
       if (err) {res.send(err);}
       res.send(tender);
     });
});
api.post('/addTender', (req, res) => {
  const tend = new tenders(req.body.tender);
  console.log(req.body.tender);
  
  tend.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(tend)}
  );
});
api.put('/editTender', (req, res) => {
  tenders.findByIdAndUpdate(

    req.body.tender._id,
    req.body.tender,
    {new: true},
    (err, tend) => {
        if (err) return res.status(500).send(err);
        return res.send(tend);
    }
  )
});
api.delete('/delete', (req,res) => {
  console.log(req.body.id);
  tenders.deleteOne({_id: req.body.id}, (err) => {
    if (err) return handleError(err);
    return res.status(200);
  })
})

module.exports = api;
