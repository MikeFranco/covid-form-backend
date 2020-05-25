require('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const postsRoute = require('./routes/posts');

const port = process.env.PORT || 5001;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT,GET,POST");
  next();
});

//Middlewares
app.use(cors());
app.use(bodyParser.json());

app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
  res.send('Nothing to see here 👀');
});

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log('Connected to the DB!')
);

app.listen(port, () => console.log(`Corriendo en el puerto: ${port}`));

module.exports = { app };