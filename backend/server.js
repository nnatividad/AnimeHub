const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('<h1>AnimeHub</h1>')
})

app.listen(port, () => {
    console.log('AnimeHub Server is set up!')
})