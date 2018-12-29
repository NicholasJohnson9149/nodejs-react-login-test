// Retrieve
const MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://<dbuser>:<dbpassword>@ds245234.mlab.com:45234/sinwaves", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
