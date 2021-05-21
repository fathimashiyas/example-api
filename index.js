const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Routes
const postRoutes = require("./routes/posts");

dotenv.config();

// Database connection
mongoose.connect(
  `mongodb://${process.env.MONGO_INITDB_USERNAME}:${process.env.MONGO_INITDB_PASSWORD}@localhost:27017/${process.env.MONGO_INITDB_DATABASE}?retryWrites=true`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Connected to the database");
    }
  }
);

// Middleware
app.use(express.json());

// Route Middleware
app.use("/api/posts", postRoutes);

app.listen(3000, () => console.log("Server started on port: 3000"));
