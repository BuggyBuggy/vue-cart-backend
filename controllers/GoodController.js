const query = require("../models/index");
const { list } = require("../models/goods").goods;
const { resSuccess, resErrDB } = require("../modules/handleResponse");

let GoodController = function () {};

GoodController.list = async function (req, res) {
  try {
    const data = await query(list);
    res.json({ ...resSuccess, data });
  } catch (error) {
    res.json(resErrDB);
  }
};

module.exports = GoodController;
