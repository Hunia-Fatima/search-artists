
// Entry Point of the API Server 
  
const express = require('express');

// loading environment variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
// port fallback to 3000 if not specified
const port = process.env.PORT || 3000

// importing controllers
var artistController = require('./server');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// API Endpoints
app.get('/testdata', artistController.function1)

const server = app.listen(port, function () {
})