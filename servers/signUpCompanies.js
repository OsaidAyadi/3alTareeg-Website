const express = require("express");
var router = express.Router();
const mongo = require("../database/signUpCompanies");

//To Reach this file, the link should be http://localhost:9000/signIn

router.get("/", (req, res) => {
  res.send("signIn Router Working Fine");
});

router.post("/CreateUser", (req, res) => {
  console.log(req.body);
  mongo.createUser(req.body, result => {
    res.json(result);
  });
});

router.post("/getUsers", (req, res) => {
  console.log(req.body);
  mongo.getUsers(req.body, result => {
    res.json(result);
  });
});

// router.get("/blabla", (req, res) => {
//   mongo.blablaFunction(result => {
//     res.json(result);
//   });
// });

module.exports = router;
