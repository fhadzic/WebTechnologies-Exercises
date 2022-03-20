
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'vjezba9'
});

connection.connect();

connection.query('SELECT * FROM pocetna', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[1].ime);
});

connection.end();