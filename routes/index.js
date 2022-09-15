const router = require('express').Router()
const tournamentRoutes = require('./tournamentRoutes')
const userRoutes = require('./userRoutes')

router.use('/api/users', userRoutes);
router.use('/api/tournament', tournamentRoutes)

module.exports = router