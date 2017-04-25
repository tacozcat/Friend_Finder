var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8081;



app.use(bodyParser.urlencoded({ extended: false }))
  
app.use(bodyParser.json())
 
require("./app/routing/apiRoutes.js")(app); 
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT);
console.log('Magic happens on port ' + PORT);