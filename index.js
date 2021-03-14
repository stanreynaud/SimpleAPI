const express = require("express")
const app = express()
const DB = require('./db/db.js')

// This file opens the database connection, imports routes and launches the server

DB.open()
require('./routes/companies')(app,DB)
require('./routes/products')(app,DB)
require('./routes/authentication')(app)

app.listen(5000, () => {
    console.log("http://localhost:5000/");
});