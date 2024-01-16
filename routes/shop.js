const path = require("path");
const express = require("express");
const adminData = require('./admin');


const router = express.Router();

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
  const products = adminData.products;
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
});

module.exports = router;
