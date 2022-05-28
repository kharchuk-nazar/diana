const {Router} = require('express')
const Statement = require('../models/Statement')
const Progress = require('../models/Progress')
const router = Router()

router.get(
    '/statement/:id', 
    async (req, res) => {
        try {
            const statementId = req.params.id;

            const statementData = await Statement.find({ teacher_id: statementId});

            if (!statementData) {
                return res.status(400).json({ message: 'not found'})
            }

            res.json({data: statementData})
            
        } catch (e) {
            console.log(e);
            res.status(500).json({ message: 'Something went wrong, try again' })
        }
})

router.get(
    '/progress/:id',
    async (req, res) => {
        try {
            const progressId = req.params.id;

            const progressData = await Progress.findOne({ teacher_id: progressId});

            if (!progressData) {
                return res.status(400).json({ message: 'not found'})
            }

            res.json({data: progressData})
            
        } catch (e) {
            console.log(e);
            res.status(500).json({ message: 'Something went wrong, try again' })
        }
})


module.exports = router