const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserControllers');

//User 

router.post('/login',userController.getUserByUsernameAndPassword)
    .post('/register',userController.createUser);

module.exports = router;


