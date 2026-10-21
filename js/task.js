function verify() {
    console.log("x, y, z");
    let x = parseFloat(elementX.value);
    let y = parseFloat(elementY.value);
    let z = parseFloat(elementZ.value);
    console.log(x, y, z);

    if (isNaN(x) || isNaN(y)    || isNaN(z)) {
        result = "Введите все три числа.";
        check = false;
    }
    else if (x <= 0 || y <= 0 || z <= 0) {
        result = "Треугольник не существует: стороны должны быть положительными.";
        check = false;
    }
    else if (x + y <= z || x + z <= y || y + z <= x) {
        result = "Треугольник не существует: сумма двух сторон должна быть больше третьей.";
        check = false;
    }
    else {
        let a, b, c;
        if (x >= y && x >= z) { c = x; a = y; b = z; }
        else if (y >= x && y >= z) { c = y; a = x; b = z; }
        else { c = z; a = x; b = y; }

        if (a * a + b * b === c * c) {
    result = "Треугольник существует и является прямоугольным.";
}
    else {
    result = "Треугольник существует и не является прямоугольным.";
        }
    check = true
    }
    document.getElementById("result").value = result;
}

function send() {
    verify();
    if (check) {
        document.getElementById("UserEnter").submit();
    }
    else {
        alert("Есть недостатки. Повторите ввод.");
    }
}

let result = "Введите значения";
let check = false;

const elementX = document.getElementById("x");
const elementY = document.getElementById("y");
const elementZ = document.getElementById("z");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send);

document.getElementById("result").value = result;