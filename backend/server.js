const express = require('express')
const mongoose = require('mongoose')
const app = express()

require('dotenv').config()
const port = process.env.PORT

// Routes
const homeRoutes = require('./routes/home')

// Middleware: [just log out type of request for now]
app.use(express.json()) //passes info to req to be used in routes
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//Setup routes
app.use('/', homeRoutes)

//Connect to Database
mongoose.connect(process.env.MONGO_URI)
.then (() => {
    app.listen(port, () => {
        console.log('AnimeHub Server is set up! Database is connected!')
    })
})
.catch((error) => {
    console.log(error)
})
