const express = require('express');
const connectDb = require('./connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.use('/', routes)

connectDb();

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
})