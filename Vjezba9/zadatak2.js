const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");


var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'vjezba9'
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/static", express.static(path.join(__dirname, "public")));


app.get('/imenik', function (req, res) {
  connection.connect();
  connection.query('SELECT * FROM imenik', function (error, results, fields) {
    if (error) throw error;

    res.render("imenik",{
        results : results
    });
  });
  connection.end();
});
app.listen(3000);