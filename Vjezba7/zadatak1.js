const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get('/unos', function (req, res, next) {
    res.sendFile("/public/forma.html", { root: __dirname });
});
app.post('/', function (req, res) {
    let tijelo = req.body;
    let novaLinija = " \n " + tijelo['ime'] + "," + tijelo['prezime'] + "," + tijelo['adresa'] + "," + tijelo['broj_telefona'];

    fs.appendFile("imenik.txt", novaLinija, function (err) {
        if (err) throw err;

        res.setHeader('Content-Type', 'text/html');
        
        fs.readFile('\imenik.txt', function read(err, data) {
            if (err) {
                throw err;
            }

            let result = "<head> <style> div { margin-top:10%; } table, td, th { text-align:center; border: 1px solid black;} table { margin: auto; width:60%; border-collapse: collapse; } </style> </head>";
            result += "<div> <table>";
            result += "<tr> <th>Ime</th> <th>Prezime</th> <th>Adresa</th> <th>Broj telefona</th> </tr>"

            var dataRows = data.toString().split(/\r?\n/);

            for (let i = 0; i < dataRows.length; i++) {
                var dataItem = dataRows[i].split(",");
                if(dataItem[0] != null && dataItem[0] != ""){
                    result += ("<tr> <td>" + dataItem[0] + "</td> <td>" + dataItem[1] + "</td> <td>" + dataItem[2] + "</td> <td>" + dataItem[3] + "</td> </tr>");
                }
            }

            result += "</table> </div>";

            res.send(result);
        })
    });


});
app.listen(8085);