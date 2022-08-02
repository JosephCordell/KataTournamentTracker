const express = require('express')
const path = require('path')
require('dotenv').config()
const PORT = process.env.PORT || 3001
const app = express()
const routes = require('./routes')
const session = require('express-session')
const compression = require('compression')

const sequelize = require('./config/connections')

app.use(compression({}))

app.use([express.urlencoded({ extended: true }), express.json()])

app.use(
    session({
        secret: 'Super secret secret',
        resave: true,
        saveUninitialized: true
    })
)

app.use(routes)

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, './build/index.html'))
})

sequelize.sync({ force: false }).then(() => {
    console.log('Connected to Database');
    app.listen(PORT, () => {
        console.log('🚀  Server now on port', PORT, '👻 React App on Port 3000');
    })
})
