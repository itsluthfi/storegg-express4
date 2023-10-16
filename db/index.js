const mongoose = require('mongoose');
const { urlDb } = require('../config');

mongoose
  .connect(urlDb, {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Connected to StoreGG Database!'))
  .catch((err) => {
    console.error(`Can't connect to StoreGG Database!`);
    console.error(err);
    process.exit(1);
  });

const db = mongoose.connection;

module.exports = db;
