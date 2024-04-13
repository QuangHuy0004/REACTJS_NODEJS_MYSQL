const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");

router.get("/index", CategoryController.index);
router.get('/show/:id', CategoryController.show);
router.post('/store',CategoryController.store);
router.patch('/update/:id',CategoryController.edit);
// router.delete('/delete/:id',CategoryController.remove);

module.exports = router;
