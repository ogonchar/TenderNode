const mongoose = require('mongoose');
/* 
    * 
*/
const ReminderSchema = new mongoose.Schema({

    text: String,
    dateCreate: Date,
    dateDestination: Date,
    owner: String

});

module.exports = mongoose.model('reminders', ReminderSchema);
