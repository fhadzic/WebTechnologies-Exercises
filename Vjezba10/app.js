const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const path = require("path");
const sequelize = require('./baza.js');
const express = require("express");
const { DatabaseError } = require('sequelize');
const app = express();

const Imenik = sequelize.import(__dirname + "/imenik.js");
Imenik.sync();
/*
sequelize.sync().then(function () {

    Imenik.create({
        ime: 'Ferid',
        prezime: 'Hadzic',
        adresa: 'Sultanovici 1',
        brojTelefona: '111/222-333',
        datumDodavanja: new Date()
    });
    Imenik.create({
        ime: 'Irfan',
        prezime: 'Prazina',
        adresa: 'Cengic Vila 1',
        brojTelefona: '222/333-444',
        datumDodavanja: new Date()
    });
    Imenik.create({
        ime: 'Vensada',
        prezime: 'Okanovic',
        adresa: 'Pofalici',
        brojTelefona: '333/444-555',
        datumDodavanja: new Date()
    });
    Imenik.create({
        ime: 'Mujo',
        prezime: 'Mujic',
        adresa: 'Bascarsija',
        brojTelefona: '333/444-555',
        datumDodavanja: new Date()
    });

})
*/

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use("/static", express.static(path.join(__dirname, "public")));


app.get('/imenik', function (req, res) {
    Imenik.findAll({ attributes: ['ime','prezime','adresa','brojTelefona'] }).then(function (resSet) {
        res.render("imenik",{
            results : resSet
        });
    })
});

app.post('/', function (req, res) {
    let tijelo = req.body;
    sequelize.sync().then(function () {
        Imenik.create({
            ime: tijelo['ime'],
            prezime: tijelo['prezime'],
            adresa: tijelo['adresa'],
            brojTelefona: tijelo['brojTelefona'],
            datumDodavanja: new Date()
        });
        console.log("Uneseno!");
        res.send("1 red uspješno unesen!");
    })
});
app.listen(3000);