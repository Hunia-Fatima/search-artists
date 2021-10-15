
// Entry Point of the API Server 
  
const express = require('express');
const cors = require("cors")

// loading environment variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
// port fallback to 3000 if not specified
const port = process.env.PORT || 3001

// importing controllers
var artistController = require('./server');

// starting the express app
const app = express();
app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// API Endpoints
app.get('/artist', artistController.getArtists)
app.get('/artist-events', artistController.getArtistsEvents)

const server = app.listen(port, function () {
})