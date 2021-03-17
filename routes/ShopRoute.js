const express = require("express");
let router = express.Router();

const ShopController = require("../controllers/ShopController");

router.post("/list", ShopController.list);

module.exports = router;
