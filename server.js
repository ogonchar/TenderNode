let express = require('express');const mongoose = require('mongoose');
let app = express();
let port = process.env.PORT || 5000;
let bodyParser = require('body-parser')
let session = require('express-session');
let routes = require('./routes/router');
let apiTenders = require('./routes/apiTenders');
let apiReminders = require('./routes/apiReminders');

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
app.use('/api/tenders', apiTenders);
app.use('/api/reminders', apiReminders);

app.listen(port, () => console.log(`Listening on port ${port}`));
