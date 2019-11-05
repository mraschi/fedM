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



window.onload = (ev) => {
    let target = document.getElementById('target');
    target.textContent = 'Hello';
    console.log(ev);
}

