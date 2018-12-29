const { mongoUser, mongoPassword } = require('./../config.js');
const MongoClient = require('mongodb').MongoClient;


const registerUser = ({ username, password }) => {
  MongoClient.connect(`mongodb://${mongoUser}:${mongoPassword}@ds245234.mlab.com:45234/sinwaves`, (err, db) => {
    if(!err) {
      console.log("We are connected");
      let dbo = db.db('sinwaves');
      let myobj = { username, password };
      dbo.collection("users").insertOne(myobj, (err, res) => {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    }
  });
}

const validateUser = () => {
  MongoClient.connect(`mongodb://${mongoUser}:${mongoPassword}@ds245234.mlab.com:45234/sinwaves`, function(err, db) {
    if(!err) {
      console.log("We are connected");
    }
  });
};

module.exports = {
  registerUser,
  validateUser
}
