const Product = require("../models/products");

exports.getaddProducts = (req, res, next) => {
  //   res.sendFile(path.join(__dirname, '../', 'views', 'add-products.p'));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postaddProducts = (req, res, next) => {
  // console.log(req.body)
  // res.redirect('/')
//   console.log(req.body.title)
  const product = new Product(req.body.title)
  product.save()
//   products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
  const products = Product.fetchAll();
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
};
