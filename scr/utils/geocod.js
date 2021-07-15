const request = require('request')

const geocod = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWxleGFsdmVzNTAwMCIsImEiOiJja29lYjJsNWkwNWN3MnBxc2Vzb2I0aGxkIn0.oi6yJx9DFVuncNOspxYnGQ&limit=1'    

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Não foi possível conectar ao servidor!', undefined)
        } else if (response.body.features.length == 0) {
            callback('Localização não encontrada!', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
            
        }
    })
}

module.exports = geocod