const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const bcryptjs = require("bcryptjs");
const saltRounds = 10;

router.get("/", (req, res, next) => {});

//GET for sign up
router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

//POST to work with sign up values
router.post("/signup", async (req, res, next) => {
  const newUser = await User.create(req.body);
  console.log(newUser);
});

//GET for log in form
router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

//POST for log in form

module.exports = router;
