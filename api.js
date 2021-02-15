const express = require("express");
const app = express();
const DB = require('./db/db.js')
const {Company, CompanyDAO} = require('./dao/company.js')

//const CompanyDAO =  require('./dao/company.js');

const DAO = new CompanyDAO()

// This file contains API endpoints declarations

DB.open()

app.use(express.json())

app.get('/companies', async (req,res) => {
    res.status(200).json(await DAO.getAll(DB.db))
    console.log(await DAO.getAll(DB.db))
})

app.get("/products", (req, res) => {
    res.json();
});
app.post('/companies', (req, res) => {

});

module.exports = app;