function dajRandom() {
    return Math.floor(Math.random() * 10);
 }
  
 function asinhronoDajRandom() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var x = dajRandom();
            if (x <= 5) resolve(x);
            else reject("broj je veći od 5");
        }, 2000);
    });
 }
 var uspjeh = function (x) {
    console.log(x);
 }
 var neuspjeh = function (poruka) {
    console.log("Došlo je do greške: " + poruka);
 }
 asinhronoDajRandom().then(uspjeh, neuspjeh);