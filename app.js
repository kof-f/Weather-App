const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const locationData = process.argv[2]

if (!locationData) {
    console.log('Please provide a location.')
} else {
    geocode(locationData, (error, { latitude, longitude, location }) => { 
        if (error) {
            return console.log(error)
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            
            console.log(location)
            console.log(forecastData)
          })
    })
}




