const db = require("../database");

//db.model and then the method (find, create, etc..)
const createUser = (user, cb) => {
  db.signUpDrivers.create({ ...user, isAvailable: true }, (err, data) => {
    if (err) cb(err);
    else cb(data);
  });
};

const getUsers = (user, cb) => {
  console.log(user);
  let USER = {
    email: user.email,
    password: user.password
  };
  console.log(USER);
  db.signUpDrivers.find(USER, (err, data) => {
    if (err) cb(err);
    else cb(data);
  });
};

module.exports = { createUser, getUsers };
