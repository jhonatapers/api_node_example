const router = require('express').Router()

//Routes 
const appRoute = require('AppRoute')


//Use Routes
router.use('/appRoute', appRoute);

module.exports = router;