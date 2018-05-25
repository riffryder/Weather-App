const request = require('request');
const geocodingAPI = require('../config/api')

var getWeather = (lat, lng, callback) => {

  request({
    url: `https://api.darksky.net/forecast/${geocodingAPI.forecastAPI}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(null, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  });
}

module.exports.getWeather = getWeather;