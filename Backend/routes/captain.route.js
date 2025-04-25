const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
    body('fullName.firstName').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('fullName.lastName').isLength({min: 3}).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('vechile.color').isLength({min: 3}).withMessage('Color must be at least 3 characters long'),
    body('vechile.plate').isLength({min: 3}).withMessage('Plate number must be at least 3 characters long'),
    body('vechile.capacity').isNumeric().withMessage('Capacity must be a number'),
    body('vechile.vechileType').isIn(['car', 'motorcycle', 'auto']).withMessage('Vechile type must be one of car, motorcycle, auto'),
], captainController.registerCaptain);

router.post('/login', [
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
], captainController.loginCaptain);

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);
module.exports = router;