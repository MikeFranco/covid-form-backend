require('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const postsRoute = require('./routes/posts');

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

app.listen(5001);
