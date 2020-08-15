const {Router} = require('express');
const config = require('config');
const Profile = require('../models/Profile');
const router = Router(); //create router, using func Router from express framework

// API/profile/:id
router.get(
    '/:id',
    async (req, res) => {
        try {
            /*const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'invalid values'
                })
            }*/

            const {fullName, city, age, working_leg, soft_skills, football_skills, karma} = req.body;
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
    }
)

// API/profile/:id
router.post(
    '/:id',
    async (req, res) => {

    }
)


module.exports = router
