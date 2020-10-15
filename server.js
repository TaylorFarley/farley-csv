let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let path = require('path')

// Express Route
const dataRoute = require('./routes/data')



// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

const app = express();
app.use(bodyParser.json({limit: '17825792'}));
app.use(bodyParser.urlencoded({
  limit: '17825792',
  extended: true
}));
app.use(cors());
app.use('/data', dataRoute)

//



app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Connected to port!!!!!!!! ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});