const express = require("express");
const app = express();
const path = require("path");
const fs = require('fs');
const bodyParser = require('body-parser')

// This file contains API endpoints declarations

app.use(bodyParser.json())

app.get("/companies", (req, res) => {
    res.json();
});
app.get("/products", (req, res) => {
    res.json();
});
app.post('/companies', (req, res) => {
    var found =false;
    for (var index = 0; index < providersMockedJson.length; ++index) {
        var provider = providersMockedJson[index];
        if(req.body.id === provider.id){
            provider.channel_definitions["0"].unavailable = !provider.channel_definitions["0"].unavailable;
            found = true;
            break;
        }
    }
    fs.writeFile("./dapi_providers.json", JSON.stringify(providersMockedJson, null, 2), function writeJSON(err) {
        if (err) return console.log(err);
    });
    res.status(found?200:400).send();
});

module.exports = app;