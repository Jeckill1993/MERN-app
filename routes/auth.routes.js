const {Router} = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const router = Router(); //create router, using func Router from express framework

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'invalid email').isEmail(),
        check('password', 'password must be at least 6 symbols, includes numbers').isLength({min: 6})
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'invalid values'
                })
            }

            const {fullName, email, password} = req.body;
            const candidate = await User.findOne({email})
            if (candidate) {
                return res.status(400).json({message: 'the user is already registered'})
            }
            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({fullName, email, password: hashedPassword})
            await user.save() // ??
            res.status(201).json({status: 200,message: 'the account was created'})


        } catch (e) {
            res.status(500).json({message: 'something is wrong'})
        }
    })

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'enter correct email').normalizeEmail().isEmail(),
        check('password', 'enter password').exists() //read about exist(), isEmail() etc = express.js doc
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'invalid values'
                })
            }

            const {email, password} = req.body;
            const user = await User.findOne({email})
            if (!user) {
                return res.status(400).json({message: 'the user is not found'})
            }
            const isMatched = await bcrypt.compare(password, user.password); // ??compare(), bcrypt doc
            if (!isMatched) {
                return res.status(400).json({message: 'invalid password, try again'})
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            )
            res.json({token, userId: user.id})

        } catch (e) {
            return res.status(400).json({message: 'the email or password is wrong'})
        }
    })

module.exports = router // ?? read about it
