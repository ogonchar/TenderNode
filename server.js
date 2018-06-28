let express = require('express');const mongoose = require('mongoose');
let tenders = require('./model/tenderSchema.js')
let app = express();
let port = process.env.PORT || 5000;
let bodyParser = require('body-parser')
let router = require('router')
let session = require('express-session');
let routes = require('./routes/router');
let api = require('./routes/api');


let MongoStore = require('connect-mongo')(session);

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/tenders');

let db = mongoose.connection ;

app.use(session({
  secret: 'The main platform for the victory is hard working',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

app.use('/', routes);
app.use('/api', api);

app.listen(port, () => console.log(`Listening on port ${port}`));
