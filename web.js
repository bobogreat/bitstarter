var express = require('express');
var fs = require('fs');
var app = express();
var htmlfile = "index.html";

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFileSync(htmlfile).toString() );
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
