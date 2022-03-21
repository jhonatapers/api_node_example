const router = require('express').Router()
const appController = require('../controllers/AppController')

router.get('/helloWorld',
    async (req, res, _) => {
        let resp = await appController.helloWorld()
        res.json(resp)
    }
)

module.exports = router