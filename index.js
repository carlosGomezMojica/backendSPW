const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require("cors");

const app = express()

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var port = 5000

app.listen(port);

var routes = require('./routes/routes')
app.use('/dev', routes);