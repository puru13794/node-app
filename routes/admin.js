const path = require("path");
const express = require("express");

const router = express.Router();

const prodcutsconstroller = require("../controllers/products");

router.get("/add-product", prodcutsconstroller.getaddProducts);

router.post("/add-product", prodcutsconstroller.postaddProducts);

// module.exports = router;
module.exports = router;
