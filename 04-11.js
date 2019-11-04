function check() {
    let name = document.getElementById('user').value.split(" ");
    console.log(name);
    if (name.length < 2) {
        window.alert("ok");
        return false;
    }
    return true;
}


function changeBcolor()  {
    let color = document.getElementById('color').value;
document.bgColor = color;
if (color= "")     {
    window.alert("insert a color");
   return false;
} else if (color== "red") {
    document.bgColor= "red";
}
window.alert("!");
return false;