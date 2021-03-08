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
    res.json(await DAO.getAll(DB.db))
})

app.get("/products", (req, res) => {
    res.json();
});
app.post('/companies', (req, res) => {
    let company = new Company(req.query.company,req.query.description,req.query.initial_price,req.query.symbol)
    DAO.create(DB.db,company)
});

module.exports = app;