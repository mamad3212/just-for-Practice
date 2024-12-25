var http = require('http');
const fs = require('fs');

// create a server object:
http.createServer(function (req, res) {

  if (req.url == '/') {

    fs.readFile('./index.html', 'utf8', function (err, data) {

      const title = "گیتار";  
      const content = "<h1>توضیحات در مورد گیتار</h1>";

      const replace = data.replace('__title__', title).replace('__content__', content); // replace title and content in index.html

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(replace);
      res.end();
    });

  } else if (req.url == '/style.css') {

    fs.readFile('./style.css', 'utf8', function (err, data) {

      if (err) return res.writeHead(500).end("Error reading style.css");

      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });

}}).listen(2222); //the server object listens on port 2222

console.log("Server running on port 2222");
