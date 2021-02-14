class DB {
    static db = null;
  
    constructor() {
      this.db_filename = filename
    }
  
    static async open() {
      if (DB.db == null) {
        DB.db = await open({
          filename: './db/base_test.db',
          driver: sqlite3.Database
        })
      }
  
      return DB.db;
    }
  }