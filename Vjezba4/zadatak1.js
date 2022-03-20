

function myFunction(referenca) {
  if (referenca.value=="+ Prva godina") {
    document.getElementById("PrvaDropdown").style.display = "block";
    referenca.value="- Prva godina";
  }else if (referenca.value=="- Prva godina"){
    document.getElementById("PrvaDropdown").style.display = "none";
    referenca.value="+ Prva godina";
  }

  if (referenca.value=="+ Druga godina") {
    document.getElementById("DrugaDropdown").style.display = "block";
    referenca.value="- Druga godina";
  }else if (referenca.value=="- Druga godina"){
    document.getElementById("DrugaDropdown").style.display = "none";
    referenca.value="+ Druga godina";
  }

  if (referenca.value=="+ Treća godina") {
    document.getElementById("TrecaDropdown").style.display = "block";
    referenca.value="- Treća godina";
  }else if (referenca.value=="- Treća godina"){
    document.getElementById("TrecaDropdown").style.display = "none";
    referenca.value="+ Treća godina";
  }
}