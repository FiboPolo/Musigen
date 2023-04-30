const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/createMusician", (req, res, next) => {
  res.render("profile/createMusician");
});

router.get("/MusicianList", (req, res, next) => {
  res.render("profile/MusicianList");
});

module.exports = router;
