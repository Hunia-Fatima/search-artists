const axios = require('axios');


// api calls and functions will go here

// finction to get the artist by its name
exports.getArtists = async function(req, res) {
    const appId = process.env.BANDSINTOWN_APP_ID
    const seachText = req.query.text
    // API call to public endpoint to get the artist data
    const url = `https://rest.bandsintown.com/artists/${seachText}?app_id=${appId}`
    axios.get(url)
    .then(response => {
        // sending status along with data payload
        res.send({status: response.status, payload: response.data})
    })
    .catch((error) => {
        // sending error status and payload
        res.send({status: error.response.status, payload: error.response.data})
    });
}

exports.getArtistsEvents = async function(req, res) {
    const appId = process.env.BANDSINTOWN_APP_ID
    // params to send in with API call
    const name = req.query.name
    const dateRange = req.query.dateRange
    const url = `https://rest.bandsintown.com/artists/${name}/events?date=${dateRange}&app_id=${appId}`
    axios.get(url)
    .then(response => {
        res.send({status: response.status, payload: response.data})
    })
    .catch((error) => {
        res.send({status: error.response.status, payload: error.response.data})
    });
}
