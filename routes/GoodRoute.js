const express = require("express");
let router = express.Router();

const GoodController = require("../controllers/GoodController");

router.post("/list", GoodController.list);

module.exports = router;
