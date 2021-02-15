const express = require("express");
const app = express();
const path = require("path");
const fs = require('fs');
const bodyParser = require('body-parser')
import {DB} from './db/db.mjs'

// This file contains API endpoints declarations

app.use(bodyParser.json())

app.get("/companies", (req, res) => {
    res.json();
});
app.get("/products", (req, res) => {
    res.json();
});
app.post('/companies', (req, res) => {

});

module.exports = app;