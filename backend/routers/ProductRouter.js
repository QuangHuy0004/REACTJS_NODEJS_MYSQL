const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

router.get('/index', ProductController.index);
router.get("/productdetail/:slug/:limit", ProductController.productdetail);
router.get("/listnew/:limit", ProductController.listnew);
router.get("/list_category/:categoryid/:limit", ProductController.list_category);
router.get("/list_brand/:brandid/:limit", ProductController.list_brand);
router.get("/list/:page/:limit", ProductController.list);
router.get("/list_product_category/:categoryid/:page/:limit", ProductController.list_product_category);
// router.get('/show/:id', Category_Controller.show);
// router.post('/store',Category_Controller.store);
// router.patch('/update/:id',Category_Controller.update);
// router.delete('/delete/:id',Category_Controller.delete);

module.exports = router;