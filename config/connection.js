const mongoose = require("mongoose");

const connectDB = () =>
{
  /*mongoose.connect(
    'mongodb+srv://fathima123:fathima123@cluster0.p8zmv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Connected to the database");
      }
    }
  );*/
  mongoose.connect(
    'mongodb://${process.env.MONGO_INITDB_USERNAME}:${process.env.MONGO_INITDB_PASSWORD}@localhost:27017/${process.env.MONGO_INITDB_DATABASE}?retryWrites=true',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Connected to the database");
      }
    }
  );
}

module.exports = connectDB;