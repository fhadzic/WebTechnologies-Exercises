function sabiranje() {
    var a = document.getElementById("sabirak1").value;
    var b = document.getElementById("sabirak2").value;
    var c=parseInt(a)+parseInt(b);
    document.getElementById("zbir").value = c;
  }


var dugme = document.getElementById("dugme");
dugme.addEventListener("click", function(ev){
    sabiranje()
    alert("Zdravo")
});