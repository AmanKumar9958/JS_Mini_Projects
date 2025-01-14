function clr(){
    document.getElementById('result').value = "";
}
// ---------------------------------------------------------
function display(value){
    document.getElementById('result').value+=value;     //value = value + value
}
// ---------------------------------------------------------
function equate(){
    let x = document.getElementById('result').value;
    let y = eval(x)     //eval is pre defined function
    document.getElementById('result').value = y;
}
// ---------------------------------------------------------