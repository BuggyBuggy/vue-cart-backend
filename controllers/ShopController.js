const query = require("../models/index");
const { list } = require("../models/shops").shops;
const { resSuccess, resErrDB } = require("../modules/handleResponse");

let ShopController = function () {};

ShopController.list = async function (req, res) {
  try {
    const data = await query(list);
    res.json({ ...resSuccess, data });
  } catch (error) {
    res.json(resErrDB);
  }
};

module.exports = ShopController;
