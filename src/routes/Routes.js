const router = require('express').Router()

//Routes 
const appRoute = require('./AppRoutes')

//Use Routes
router.use('/appRoute', appRoute);

module.exports = router;