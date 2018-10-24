const request = require('request');
const yargs = require('yargs');
const axios = require('axios');

const geocode = require('./geocode/geocode');
const weather = require('./weather');

const argv = yargs
  .options({
    a:{
      describe: "Gets the address",
      demand: false,
      alias: 'address',
      string: true
    }
  })
  .help()
  .alias()
  .argv;
//

//Fetching the geocode of the address
geocode.geocodeAddress(argv.address, function(longLang, error){
  if(!error){
    var coordinates = longLang.latitude.toString() + ',' + longLang.longitude.toString();
    var locationName = longLang.formatted_address;

//Fetching the weather forecast
    weather.getWeather(coordinates, (response, error) => {
      if(response){
        response.locationName = locationName;
        response = JSON.stringify(response, undefined, 2);
        console.log(response);
      }else{
        console.log(error);
      }
    });
  }else{
    console.log(error);
  }
});
