const express = require('express');
const bodyParser = require('body-parser');

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'vjezba9'
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res) {
    let tijelo = req.body;
    let novaLinija = " \n " + tijelo['ime'] + "," + tijelo['prezime'] + "," + tijelo['adresa'] + "," + tijelo['broj_telefona'];
    connection.connect();
    var sql = "INSERT INTO imenik (ime, prezime, adresa, broj_telefona) VALUES ('" + tijelo['ime'] +"', '"+ tijelo['prezime'] +"', '"+ tijelo['adresa'] +"', '"+  tijelo['broj_telefona'] +"')";
    connection.query(sql, function (error, results) {
        if (error) throw error;

        console.log("Uneseno!");
        res.send("1 red uspješno unesen!");
    });
    connection.end();
});
app.listen(3000);