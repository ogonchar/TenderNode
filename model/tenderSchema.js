const mongoose = require('mongoose');

const TenderSchema = new mongoose.Schema({

    id: {
      type: String,
      unique: true
    },
    stage: String,
    contact: String,
    city: String,
    price: String,
    objectOfPurchase: String,
    procuring: String,
    site: String,
    dateTo: Date,
    dateTender: Date,
    procuringContract: String,
    owner: String
});

module.exports = mongoose.model('tenders', TenderSchema);
