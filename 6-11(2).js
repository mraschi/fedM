











 function filler() {
    let fill = new XMLHttpRequest();
    fill.onload = callback;
    fill.open("GET", "tom.json");
    fill.send();
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







