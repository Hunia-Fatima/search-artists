const axios = require('axios')

exports.getArtists = async function (searchText) {
    let artists = []
    let errMsg = ''
    let statusMsg = ''
    await axios.get("/artist", { params: { text: searchText } }).then(response => {
        if (response.data.status == 200) {
            if (response.data.payload) {
                artists.push(response.data.payload)
            }
            else {
                statusMsg = 'No artist found against your search'
            }
        }
        else {
            errMsg = 'Failed to Load artist'
        }
    })
    return {data: artists, statusMsg: statusMsg, errMsg: errMsg}
}

exports.getArtistByName = async function (name) {
    let artist = null
    let errMsg = ''
    let statusMsg = ''
    await axios.get("/artist", { params: { text: name } }).then(response => {
        if (response.data.status == 200) {
            console.log(response.data)
            if (response.data.payload) {
                artist = response.data.payload
            }
            else {
                statusMsg = 'No Artist Found Against your Search'
            }
        }
        else {
            errMsg = 'Failed to Load artist'
        }
    })
    return {data: artist, statusMsg: statusMsg, errMsg: errMsg}
}

exports.getArtistsEvents = async function (artist, dateRange) {
    let events = []
    let errMsg = ''
    let statusMsg = ''
    await axios.get('/artist-events', { params: { name: artist, dateRange: dateRange } }).then(response => {
        if (response.data.status == 200) {
            console.log(response.data)
            if (response.data.payload) {
                events = response.data.payload
            }
            else {
                statusMsg = 'No upcoming events for this artist'
            }
        }
        else {
            errMsg = 'Failed to Load events'
        }
    })
    return {data: events, statusMsg: statusMsg, errMsg: errMsg}
}