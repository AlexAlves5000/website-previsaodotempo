const request = require('request')

const forecast = (lon, lat, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=fd2e6cbc7ea5a7bd5bea439fb59472b2&query=' + lon + ',' + lat
    
    // console.log(url)
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Não foi possível conectar ao servidor de previsão do tempo!', undefined)
        } else if (response.body.success === 'false') {
            callback('Previsão não disponível para esta localização!', undefined)
        } else {
            callback(undefined, {
                temperatura: response.body.current.temperature,
                chuva: response.body.current.precip,
                stermica: response.body.current.feelslike,
                iconedotempo: response.body.current.weather_icons,
                humidade: response.body.current.humidity
            })
            
        }
    })
}

module.exports = forecast