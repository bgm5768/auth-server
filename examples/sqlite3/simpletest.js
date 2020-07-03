var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('auth_databases/test.db');
 
db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS users (userid VARCHAR(25))");
 
  var stmt = db.prepare("INSERT INTO users VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("testuser" + i);
  }
  stmt.finalize();
 
  db.each("SELECT rowid AS id, userid FROM users", function(err, row) {
      console.log(row.id + ": " + row.userid);
  });
});
 
db.close();