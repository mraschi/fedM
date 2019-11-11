function filler() {
    let request = new XMLHttpRequest();
    request.onload = callback;
    request.open("GET", "tom.json");
    request.send();
}






function callback() {
    let json = JSON.parse(this.responseText);
    document.getElementById('name').value = json.name;
    document.getElementById('job').value = json.job.title;
    let lang = json.job.languages;
    for (j = 0; j < lang.length; j++) {
        if (lang[j] == "JavaScript") {
            document.getElementById("langJS").checked = true;
        } else if (lang[j] == "HTML") {
            document.getElementById("langHtml").checked = true;
        } else if (lang[j] == "CSS") {
            document.getElementById("langCss").checked = true;
        } else if (lang[j] == "Python") {
            document.getElementById("langPy").checked = true;
        } else if (lang[j] == "Java") {
            document.getElementById("langJ").checked = true;
        } else if (lang[j] == "Cpp") {
            document.getElementById("langCpp").checked = true;
        }
    }
}
