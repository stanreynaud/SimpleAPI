import {default as mongodb} from 'mongodb';

class DB {
    static db = null;
  
    constructor() {
    }
  
    static async open() {
      const url = 'mongodb://localhost:27017'
      mongodb.MongoClient.connect(url, function(err, db_ref) {
        if (err) throw err;
        db = db_ref;
      });
    }
  }

  export {DB}