var inputs = [];
function subit1() {
    for (var p1 = 1; p1 <= 6; p1++) {
        inputs.push(document.getElementById("set1_box" + p1).value);
        inputs.join(". ")
    }
    document.getElementById("showtext1").innerHTML = inputs;
    document.getElementById("b1").style.display = none;
    document.getElementById("resetb").style.display = inline-block;
}
function subit2() {
    for (var p2 = 1; p2 <= 6; p2++) {
        inputs.push(document.getElementById("set1_box" + p2).value);
        inputs.join(". ")
    }
    document.getElementById("showtext2").innerHTML = inputs;
    document.getElementById("b2").style.display = none;
    document.getElementById("resetb").style.display = inline-block;
}
function reset() {
    document.getElementById("b1").style.display = inline-block;
    document.getElementById("b2").style.display = inline-block;
    document.getElementById("b2").style.display = none;
    document.getElementById("showtext2").innerHTML = " ";
}