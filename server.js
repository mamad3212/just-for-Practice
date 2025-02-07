var http = require('http');
const fs = require('fs');
const mysql = require('mysql');


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'practice'
});

db.connect(function(err) {
  console.log('connect to mysql');
});


// create a server object:
http.createServer(function (req, res) {

  if (req.url == '/') {

    fs.readFile('./index.html', 'utf8', function (err, data) {

      const title = "گیتار";
      const content = "<h1>توضیحات در مورد گیتار</h1>";

      const replace = data.replace('__title__', title).replace('__content__', content);

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(replace);
      res.end();
    });

  } else if (req.url == '/css/style.css') { 

    fs.readFile('./css/style.css', 'utf8', function (err, data) {

      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });

  }

}).listen(2222); //the server object listens on port 2222

console.log("Server running on port 2222"); 