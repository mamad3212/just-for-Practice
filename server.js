var http = require('http');
const fs = require('fs');

// create a server object:
http.createServer(function (req, res) {

  // read file 
  fs.readFile('./index.html', 'utf8', function (err, data) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end(); //end the response
  });
  }).listen(2222); //the server object listens on port 2222
  
  console.log ("Server running on port 2222");
