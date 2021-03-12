const express = require("express")
const app = express()
const DB = require('./db/db.js')

// This file opens the database connection, imports routes and launches the server

DB.open()
app.use(express.json())

require('./routes/companiesRoutes')(app,DB)
require('./routes/productsRoutes')(app,DB)

app.listen(5000, () => {
    console.log("http://localhost:5000/");
});