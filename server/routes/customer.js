const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController')

router.get('/', customerController.homepage);
router.get('/register', customerController.addCustomer);
router.get('/register', customerController.postCustomer);



module.exports = router;