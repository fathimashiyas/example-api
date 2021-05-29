const express = require("express");
const app = express();
              
const dotenv = require("dotenv");
var cookieParser = require('cookie-parser');
const dbConnection = require("./config/connection");
const errorHandler = require("./middleware/errorHandler");

// Routes
const postRoutes = require("./routes/posts");
const authenticationRouts = require("./routes/authentication");

dotenv.config();

// Database connection
dbConnection();

// Middleware
app.use(express.json());

//Cookie parser
app.use(cookieParser());

// Route Middleware
app.use("/api/posts", postRoutes);
app.use("/api/posts", authenticationRouts);
app.use(errorHandler);
//app.use(auth);

app.listen(3000, () => console.log("Server started on port: 3000"));

