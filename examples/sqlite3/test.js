var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('auth_databases/test.db');
 
db.serialize(function() {
  db.run("drop table users");
  //db.run("CREATE TABLE users (userid VARCHAR(25))");
});
 
db.close();