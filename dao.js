const MongoClient = require('mongodb').MongoClient;
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Start mongod
// Database Name

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("local");
  dbo.collection("startup_log").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});