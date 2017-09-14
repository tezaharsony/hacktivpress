const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/hackpress_tezaharsony')

const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const users = require('./Routers/Users');
const login = require('./Routers/Auth');
const article = require('./Routers/Articles');


app.use('/api/users', users)
app.use('/api/login', login)
app.use('/article', article)

app.listen(process.env.PORT || 3000)
