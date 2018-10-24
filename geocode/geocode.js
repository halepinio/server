const request = require('request');
const axios = require('axios');

function geocodeAddress(inputAddress, callback){
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: inputAddress,
        key: 'AIzaSyCEblkdFRMzOgVUkA0ciIsW-jR5vrnxUUc'
      }
    }).then(response => {
      console.log(response);
      debugger;
      callback({
        formatted_address: response.data.results[0].formatted_address,
        latitude: response.data.results[0].geometry.location.lat,
        longitude: response.data.results[0].geometry.location.lng
      }, undefined);
    }).catch(error => {
      callback(undefined, error);
    });
};



module.exports.geocodeAddress = geocodeAddress;
