const express = require('express');

const router = express.Router();
const productsController = require('../controllers/contact')
const path = require('path');
const rootDir = require('../util/path');


router.get('/contact',productsController.getContactPage);

router.post('/success',productsController.postContact);



module.exports = router;