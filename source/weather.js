const request = require('request');

var getWeather = (address, callback) => {
  request({
    url: `https://api.forecast.io/forecast/786e5c72220139da7e0e3f87cd8f4c32/${address}`,
    json: true
  }, (error, response, body) =>{
    if(!error && response.statusCode === 200){
      callback({
        timeZone: body.timezone,
        hourlySummary: body.hourly.summary,
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      }, undefined);
    }else{
      callback(undefined, `Unable to fetch weather`);
    }
  });
};

module.exports.getWeather = getWeather;
