function dajRandom() {
    return Math.floor(Math.random() * Math.floor(10));
 }
  
 function asinhronoDajRandom(redBr = 1) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var x = dajRandom();
            if (x <= 5) resolve(x);
            else reject("broj je veći od 5, broj poziva " + redBr);
        }, 2000);
    });
 }
 var uspjeh = function (x) {
    console.log(x);
 }
 var neuspjeh = function (poruka) {
    console.log("Došlo je do greške: " + poruka);
 }
 var nizPromisea = [];
 for (var i = 0; i < 5; i++) {
    nizPromisea.push(asinhronoDajRandom(i + 1));
 }
 Promise.all(nizPromisea).then(uspjeh, neuspjeh);