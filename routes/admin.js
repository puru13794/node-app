const path = require("path");
const express = require("express");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  //   res.sendFile(path.join(__dirname, '../', 'views', 'add-products.p'));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
});

router.post("/add-product", (req, res, next) => {
  // console.log(req.body)
  // res.redirect('/')
  products.push({ title: req.body.title });
  res.redirect("/");
});

// module.exports = router;
exports.routes = router;
exports.products = products;
