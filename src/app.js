const express = require('express')
const app = express()


require('dotenv').config()
require('../models/db/connection')
const userRoutes = require('../routs/user.routs')
const todoRoutes = require('../routs/todo.routs')

const cors = require('cors')
app.use(cors())

app.use( express.urlencoded( { extended : true } ) )
app.use( express.json() )

app.use('/user', userRoutes )
app.use('/todo', todoRoutes)
module.exports = app