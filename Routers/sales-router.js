const express = require("express");
const knex = require("../data/db-config.js");

const router = express.Router();

router.use((req, res, next) => {
  console.log("in sales router");
  next();
});

router.get("/", async (req, res) => {
  try {
    const carDatas = await knex("sales");
    res.status(200).json(carDatas);
  } catch (err) {
    res.status(500).json({ errorMessage: "Server Error ", err: err });
  }
});

module.exports = router;
