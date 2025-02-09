var http = require('http');
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

// sql code
const query = `
  INSERT INTO pages (id, page, \`key\`, value) 
  VALUES 
    ('1', 'index', 'title', 'گیتار'), 
    ('2', 'index', 'content', 'متن');
`;

connection.query(query, function(err, results) {
    console.log('Records inserted:', results);
  
    connection.end();

});
