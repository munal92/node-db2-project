const express = require("express");
const knex = require("../data/db-config.js");

const router = express.Router();

router.use((req, res, next) => {
  console.log("in cars router");
  next();
});

router.get("/", async (req, res) => {
  try {
    const carDatas = await knex("cars");
    res.status(200).json(carDatas);
  } catch (err) {
    res.status(500).json({ errorMessage: "Server Error ", err: err });
  }
});

router.post("/", (req, res) => {
  const CarData = req.body;
  //console.log(CarData)
  knex("cars")
    .insert(CarData)
    .then((car) => {
      res.status(200).json(CarData);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Server Error ", err: err });
    });
});

router.put("/:id", (req, res) => {
  const CarData = req.body;
  const { id } = req.params;
  console.log("car Data", CarData, "id ", id);
  knex("cars")
    .update(CarData)
    .where({ id })
    .then((car) => {
      res.status(200).json(CarData);
    })
    .catch((err) => {
      console.log("car Data error ", err);
      res.status(500).json({ errorMessage: "Server Error", error: err });
    });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [deleted] = await knex("cars").where({ id });
    const car = await knex("cars").del().where({ id });
    if (car > 0) {
      res.status(200).json(deleted);
    } else {
      res.status(404).json({ message: "can't delete the car" });
    }
  } catch (err) {
    res.status(500).json({ errorMessage: "Server Error", error: err });
  }
});

module.exports = router;
