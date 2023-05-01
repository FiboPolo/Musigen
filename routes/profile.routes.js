const express = require("express");
const router = express.Router();
const Musician = require("../models/musician.model");

router.get("/createMusician", (req, res, next) => {
  res.render("profile/createMusician");
});

router.post("/createMusician", async (req, res, next) => {
  console.log(req.body);
  const createdMusician = await Musician.create(req.body);
  console.log("new musician", createdMusician);
  res.redirect("/profile/musicianList");
});

router.get("/MusicianList", async (req, res, next) => {
  const allMusicians = await Musician.find();
  res.render("profile/musicianList", { allMusicians });
});

router.get("/delete/:musicianId", async (req, res, next) => {
  const { musicianId } = req.params;
  await Musician.findByIdAndDelete(musicianId);
  console.log(req.params);
  res.redirect("/profile/musicianList");
});

router.get("/editMusician/:musicianId", async (req, res, next) => {
  const musicianToUpdate = await Musician.findById(
    req.params.musicianId
  ).populate();
  console.log(musicianToUpdate);
  res.render("profile/editMusician", { musicianToUpdate });
});


module.exports = router;
