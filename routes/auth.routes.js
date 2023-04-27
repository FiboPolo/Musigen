const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {});

//GET for sign up
router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

//POST to work with sign up values

//GET for log in form
router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

//POST for log in form

module.exports = router;
