const express = require('express');
const router = express.Router();
const newscontroller = require('../app/controllers/Newscontrollers');

router.get('/news', newscontroller.index);
router.get('/news/:id', newscontroller.show);
module.exports = router;
