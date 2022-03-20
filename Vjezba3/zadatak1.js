
 function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
 
 function provjera () {
    var odgovor = prompt("Kako se zoves?", "Imenom i prezimenom(default)");
    if (odgovor != null && odgovor != "") {
        var r = confirm("Pritisnite OK da prikazete ime u alertboxu a Cancel za prikaz direktno na stranici");
        if (r == true)  // ili if(r)
            alert(reverseString(odgovor));
        else{
            document.write(odgovor);
        }
    }
}
var dugme = document.getElementById("dugme");
dugme.addEventListener("click", function (ev) {
    alert(provjera());
})