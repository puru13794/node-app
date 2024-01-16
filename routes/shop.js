const path = require("path");
const express = require("express");
const productsCOntroller = require('../controllers/products')


const router = express.Router();

router.get("/", productsCOntroller.getProducts);

module.exports = router;
