// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');

// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;

// geocode.geocodeAddress(argv.address, (error, results) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

const geocodingAPI = require('./config/geocoding')

const request = require('request');

request({
  url: `https://api.darksky.net/forecast/${geocodingAPI.forecastAPI}/30.2603535,-97.7145152`,
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);
  } else {
    console.log('Unable to fetch weather')
  }
});