const router = require('express').Router()
// const tournamentRoutes = require('./tournamentRoutes')
const userRoutes = require('./userRoutes')

router.use('/api/users', userRoutes);

module.exports = router