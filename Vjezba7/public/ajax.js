function loadSite(br) {
    const xhr = new XMLHttpRequest();
    const container = document.getElementById("siteLoader");

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status == 200) {
            container.innerHTML = this.responseText;
        } else {
            console.warn("Did not recieve 200 OK from response!");
        }
    };

    if (br == 1)
        xhr.open("GET", "stranica1.html", true);
    if (br == 2)
        xhr.open("GET", "stranica2.html", true);
    if (br == 3)
        xhr.open("GET", "stranica3.html", true);

    xhr.send();
}
