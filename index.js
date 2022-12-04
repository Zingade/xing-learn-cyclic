const express = require('express');
require('dotenv').config()
const path = require('path')
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

const mongodbUrl = process.env.MONGODB_URL || 'mongodb://localhost/xing-learn';
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(mongodbUrl);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
//mongoose.connect(mongodbUrl,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
//.catch(error => console.log(error.reason));

const app = express();

app.use(bodyParser.json())
app.use('/api/users', userRoute);

app.use(express.static(path.join(__dirname, './frontend/build')))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, './frontend/build/index.html')))

  connectDB().then(() => {
    app.listen(port, () => {
    console.log(`xingShop Backend is listening at http://localhost:${port}`)
  })})