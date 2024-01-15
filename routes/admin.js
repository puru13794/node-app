const path = require("path");
const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-products.html'));
});

module.exports = router;
