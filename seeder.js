const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'practice'
});

// اتصال به پایگاه داده
db.connect(function(err) {

  console.log('Connected to MySQL');
});

// داده‌ها
const data = [
  { page: 'index', key: 'title', value: 'گیتار' },
  { page: 'index', key: 'content', value: 'متن' }
];


const query = 'INSERT INTO pages (page, key, value) VALUES';


const values = data.map(item => [item.page, item.key, item.value]);

db.query(query, [values], function(err, results) {

  db.end();
});
