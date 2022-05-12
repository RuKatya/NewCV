import { body } from 'express-validator';

export const validation = [
    body('name')
        .isLength({ min: 2 })
        .withMessage('Please enter your full name'),
    body('email')
        .isEmail()
        .withMessage('Please enter your correct email')
        .normalizeEmail(),
    body('message')
        .isLength({ min: 1 })
        .withMessage('Please enter about what you want to speak about')
]