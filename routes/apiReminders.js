var express = require('express');
var api = express.Router();
let reminders = require('../model/reminderSchema.js')


api.post('/create', (req, res) => {

    const reminder = new reminders(req.body);
    console.log(req.body);
    
    reminder.save(err => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(reminder)}
    );
  });

api.get('/read', (req, res) => {
    console.log(req.body);
    reminders.find( function(err,reminders) {
        if (err) {res.send(err);}
        res.send(reminders);
      });
});

api.put('/update', (req, res) => {
    console.log(req.body);
});

api.delete('/delete', (req,res) => {
    console.log(req.body.tender);
})

// 

module.exports = api;