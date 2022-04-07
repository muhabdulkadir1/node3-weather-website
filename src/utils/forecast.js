const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7c59f183cb5824cbe5712e7c406ddd97&query='+ latitude + ',' + longitude + '&unit=f'

    request(
        {url, json: true}, (error, {body}) => {
            if (error) {
                callback("Unable to connect to weatherstack")
            } else if (body.error) {
                callback("Unable to connect to find location")
            } else {
                callback(undefined, body.current.weather_descriptions[0] + " today. It is currently " + body.current.temperature + " degrees out. There is a " + body.current.feelslike + "% chance of rain.")
            } 
        }
    )
}

module.exports = forecast