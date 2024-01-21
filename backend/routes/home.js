const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({'title': 'Jujutsu Kaisen 2nd Season'})
})

module.exports = router