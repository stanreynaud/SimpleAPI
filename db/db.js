const MongoClient = require('mongodb').MongoClient;

class DB {
    static db = null;
  
    constructor() {
    }
  
    static async open() {
        const url = 'mongodb://localhost:27017'
        const dbName = 'local'
        MongoClient.connect(url, function(err, client) {
            console.log("Connected successfully to server");
            DB.db = client.db(dbName);
        });
    }
  }

module.exports = DB
