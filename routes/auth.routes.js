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
  try {
    const potentialUser = await User.findOne({ username: req.body.username });
    if (!potentialUser) {
      const salt = bcryptjs.genSaltSync(saltRounds);

      const passwordHash = bcryptjs.hashSync(req.body.password, salt);

      const newUser = await User.create({
        username: req.body.username,
        passwordHash,
      });
      res.redirect("/auth/login");
    } else {
      res.render("auth/signup", { errorMessage: "Username already in use" });
    }
  } catch (error) {
    console.log(error);
  }
});

//GET for log in form
router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

//POST for log in form

module.exports = router;
