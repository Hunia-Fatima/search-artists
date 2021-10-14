const { response } = require("express")
const axios = require('axios');


// api calls and functions will go here
exports.getArtists = async function(req, res) {
    const appId = process.env.BANDSINTOWN_APP_ID
    const seachText = req.query.text
    const url = `https://rest.bandsintown.com/artists/${seachText}?app_id=${appId}`
    axios.get(url)
    .then(response => {
        console.log(response.data)
        res.send({status: response.status, payload: response.data})
    })
    .catch((error) => {
        res.send({status: error.response.status, payload: error.response.data})
    });
}

exports.getArtistsEvents = async function(req, res) {
    const appId = process.env.BANDSINTOWN_APP_ID
    const name = req.query.name
    const url = `https://rest.bandsintown.com/artists/${name}/events?app_id=${appId}`
    axios.get(url)
    .then(response => {
        console.log(response.data)
        res.send({status: response.status, payload: response.data})
    })
    .catch((error) => {
        res.send({status: error.response.status, payload: error.response.data})
    });
}
