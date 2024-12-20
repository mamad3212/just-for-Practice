var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write(req.url);
  res.end(); //end the response
}).listen(2222); //the server object listens on port 8080

console.log ("server running on port 2222");
