const {Router} = require('express')
const User = require('../models/User')
const router = Router()

router.post(
    '/login', 
    async (req, res) => {
        try {
            const {email, password} = req.body;

            const user = await User.findOne({ email })
            
            if (!user) {
                return res.status(400).json({ message: 'Неправильний пароль або емейл'})
            }

            if (user.password !== password) {
                return res.status(400).json({ message: 'Неправильний пароль або емейл'})
            }

            res.json({userId: user.user_id})
            
        } catch (e) {
            res.status(500).json({ message: 'Something went wrong, try again' })
        }
})

module.exports = router