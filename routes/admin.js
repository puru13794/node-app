const path = require("path");
const express = require("express");

const router = express.Router();

const products = []

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-products.html'));
});

router.post("/add-product", (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
  });

module.exports = router;
