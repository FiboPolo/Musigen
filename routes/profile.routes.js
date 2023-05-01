const express = require("express");
const router = express.Router();
const Musician = require("../models/musician.model");

/* GET home page */
router.get("/createMusician", (req, res, next) => {
  res.render("profile/createMusician");
});

router.post("/createMusician", async (req, res, next) => {
  console.log(req.body);
  const createdMusician = await Musician.create(req.body);
  console.log("new musician", createdMusician);
  res.redirect("/profile/musicianList");
});

router.get("/MusicianList", (req, res, next) => {
  res.render("profile/musicianList");
});

module.exports = router;
