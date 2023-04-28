const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const bcryptjs = require("bcryptjs");
const saltRounds = 10;

const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/; // spec char, a capital, 8 characters long

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
      if (pwdRegex.test(req.body.password)) {
        const salt = bcryptjs.genSaltSync(saltRounds);

        const passwordHash = bcryptjs.hashSync(req.body.password, salt);

        const newUser = await User.create({
          username: req.body.username,
          passwordHash,
        });
        res.redirect("/auth/login");
      } else {
        res.render("auth/signup", {
          errorMessage: "Password not strong enough ",
          data: { username: req.body.username },
        });
      }
    } else {
      res.render("auth/signup", {
        errorMessage: "Username already in use",
        data: { username: req.body.username },
      });
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
router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    console.log(user);
    if (!!user) {
      if (bcryptjs.compareSync(req.body.password, user.passwordHash)) {
        res.render("auth/profile", { user });
      } else {
        res.render("auth/login", {
          errorMessage: "Wrong password",
        });
      }
    } else {
      res.render("auth/login", {
        errorMessage: "User does not exist",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
