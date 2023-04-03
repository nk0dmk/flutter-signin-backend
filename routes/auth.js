const { Router } = require('express');
const { googleAuthController } = require('../controllers/auth');
const router = Router();

//? add route 
router.post('/google', googleAuthController);


module.exports = router;
