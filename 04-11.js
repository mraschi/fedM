function check() {
    let name = document.getElementById('user').value.split(" ");
    console.log(name);
    if (name.length < 2) {
        window.alert("ok");
        return false;
    }
    return true;
}


function changeBgcolor() {
    let color = document.getElementById("color").value;
    document.bgColor = color;
}

function changeBgcolorSelect() {
    let color = document.getElementById("selectColor").value;
    document.bgColor = color;
}

function changeOnMouse() {
    let target = document.getElementById ("titoloOnMouse")
    target.textContent = "Ciao";
}



function getInfo() {
    let request = new XMLHttpRequest();
    request.onload = callback;
    request.open("GET", "tom.json");
    request.send();
}


function callback() {
    let target = document.getElementById('target');
    if (this.status != 200) {
        target.value += "[" + this.status + "]\n";
        return;
    }
    let json = JSON.parse(this.responseText);
    target.value += json.name + '\n';
    target.value += json.job.title + '\n';
    target.value += json.job.languages + '\n';
}



window.onload = (ev) => {
    let target = document.getElementById('target');
    target.textContent = 'Hello' ;
    console.log(ev);
}








function getInfoTXT() {
    let request = new XMLHttpRequest();
    request.onload = callbackTXT;
    request.open("GET", "tom.txt");
    request.send();
}

function callbackTXT() {
    let target = document.getElementById('target');
    if (this.status != 200) {
        target.value += "[" + this.status + "]\n";
        return;
    }
    let json = JSON.parse(this.responseText);
    target.value += json.name + '\n';
    target.value += json.job.title + '\n';
    target.value += json.job.languages + '\n';
}




