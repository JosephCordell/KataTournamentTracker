const express = require('express')
const path = require('path')
require('dotenv').config()
const PORT = process.env.PORT || 3001
const app = express()
const routes = require('./routes')
const session = require('express-session')
const cors = require('cors')
const sequelize = require('./config/connections')

app.use(cors())

app.use([express.urlencoded({ extended: true }), express.json()])

app.use(
    session({
        secret: 'Super secret secret',
        resave: true,
        saveUninitialized: true
    })
)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(routes)

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})


sequelize.sync({ force: false }).then(() => {
    console.log('Connected to Database');
    app.listen(PORT, () => {
        console.log('🚀  Server now on port', PORT);
    })
})
