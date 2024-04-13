const express = require('express');
const router = express.Router();
const BannerController = require("../controllers/BannerController");

router.get("/index", BannerController.index);
router.get("/list/:position", BannerController.list);
// router.get('/show/:id', BannerController.show);
// router.post('/store',BannerController.store);
// router.patch('/update/:id',BannerController.update);
// router.delete('/delete/:id',BannerController.delete);

module.exports = router;