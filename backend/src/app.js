require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors());
app.use(express.json());

app.use('/users', require('../routes/users'))
app.use('/qrs', require('../routes/qr'))


module.exports = app