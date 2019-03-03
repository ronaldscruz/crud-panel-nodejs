const express = require('express')
const path = require('path')
const requireDir = require('require-dir')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const methodOverride = require('method-override')

const app = express()

app.use(express.json())
app.use(express.static(__dirname + "/public"))

app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.set('views', path.join(__dirname + '/public'))
app.set('view engine', 'ejs')

mongoose.connect(
   "mongodb://localhost:27017/profiles",
   {useNewUrlParser: true}
)

requireDir('./src/models')

app.use('/', require('./src/routes'))

app.listen(3002)