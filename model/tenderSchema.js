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

// var tender1 = new tenders ({
//   id: "01118",
// stage: "Подача",
// contact: "НЕРЧИНСКОЕ МУНИЦИПАЛЬНОГО РАЙОНА",
// city: "Нерчинск",
// price: "1493000",
// objectOfPurchase: "Выполнение работ по ремонту ",
// procuring: "54235",
// site: "www.sberbank-ast.ru",
// dateTo: "2018-06-15",
// dateTender: "2018-06-18",
// procuringContract: "45613215"
// });
// tender1.save(function(err) {
//     if (err) console.log(err);}
// );


module.exports = mongoose.model('tenders', TenderSchema);
