const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/35d4d87baadfa49df8a2ae20fceea290/' + latitude + ',' + longitude

    request({url, json: true}, (error, { body }) => {
    if (error) {
        callback('Unable to connect to weather services!', undefined)
    } else if (body.error) {
        callback('Unable to find location!', undefined)
    } else {
        const temperature = body.currently.temperature
        const precipProbability = body.currently.precipProbability
        const todaySummary = body.daily.data[0].summary
    
        const weatherForecast = todaySummary + ' It is currently ' + temperature + ' degrees. There is a ' 
        + precipProbability + '% chance of rain.'

        callback(undefined, weatherForecast)
    }
})
}

module.exports = forecast