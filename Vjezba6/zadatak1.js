var http = require('http');//ukljucujemo modul http
var fs = require('fs');//ukljucujemo modul fs
http.createServer(function (req, res) {
    var izvrseno = "<h1>Nije GET zahtjev</h1>";
    
    if (req.method == "GET") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('\imenik.txt', function read(err, data) {
            if (err) {
                izvrseno='<h1>Error read CSV:' + err + '</h1>';
                throw err;
            }

            var dataRows = data.toString().split(/\r?\n/);

            const fs = require('fs');
            var imenik = []
            for (let i = 0; i < dataRows.length; i++) {
                var dataItem = dataRows[i].split(",");
                let osoba = {
                    ime: dataItem[0],
                    prezime: dataItem[1],
                    adresa: dataItem[2],
                    broj_telefona: dataItem[3]
                };
                imenik.push(osoba);
            }

            fs.writeFile("imenik.json", JSON.stringify(imenik), function (err) {
                if (err) {
                    izvrseno = '<h1>Error write JSON:' + err + '</h1>';
                    throw err;
                }
                izvrseno = '<h1>Complete write JSON</h1>'
            });

        })
    }
    res.write(izvrseno);
    res.end('<b>Metoda:'+req.method+'</b>');

}).listen(8080);