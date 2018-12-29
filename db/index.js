const { mongoUser, mongoPassword } = require('./../config.js');
const MongoClient = require('mongodb').MongoClient;


const registerUser = ({ username, password }, cb) => {
  MongoClient.connect(`mongodb://${mongoUser}:${mongoPassword}@ds245234.mlab.com:45234/sinwaves`, { useNewUrlParser: true }, (err, db) => {
    if(!err) {
      console.log('We are connected');
      let dbo = db.db('sinwaves');
      let myobj = { username, password };
      dbo.collection('users').insertOne(myobj, (err, res) => {
        if (err) console.log(err);
        console.log('1 document inserted');
        db.close();
        cb();
      });
    }
  });
}

const validateUser = ({ username, password }, cb) => {
  MongoClient.connect(`mongodb://${mongoUser}:${mongoPassword}@ds245234.mlab.com:45234/sinwaves`, { useNewUrlParser: true }, (err, db) => {
    if(!err) {
      console.log('We are connected');
      let dbo = db.db('sinwaves');
      let query = { username };
      dbo.collection("users").find(query).toArray((err, res) => {
        if (err) console.log(err);
        console.log(res);
        db.close();
        cb(res);
      });
    }
  });
};

module.exports = {
  registerUser,
  validateUser
}
