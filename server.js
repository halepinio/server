const express = require('express');
// const hbs = require('hbs');
const fs = require('fs');

var app = express();

//Starting the home page
app.use(express.static(__dirname));


//
// hbs.registerPartials(__dirname + '/views/partials');
// hbs.registerHelper('getCurrentYear', () => {
//   return new Date().getFullYear
// });
// app.set('view engine', 'hbs');
//
app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  fs.appendFile('server.log', log + '\n', (error) =>{
    if(error){console.log(error);}
  });
  next();
});

//Launching the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
