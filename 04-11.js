function check() {
    let name = document.getElementById('user').value.split(" ");
    console.log(name);
    if (name.length < 2) {
        window.alert("ok");
        return false;
    }
    return true;
}




