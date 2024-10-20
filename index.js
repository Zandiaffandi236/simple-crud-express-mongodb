const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products.routes');

const app = express();

//use .env config
require('dotenv').config();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello from Node API')
});

mongoose.connect(process.env.MONGODB_CONN_URL)
  .then(() => {
    console.log('connected to database');
    app.listen(3000, (req, res) => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log('connection failed');
  });
