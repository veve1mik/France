function changeToLatin() {
    document.getElementById("surname").innerText = "ZUBTSOV";
    document.getElementById("firstname").innerText = "MIKHAIL";
    document.getElementById("otchestvo").innerText = "ANDREEVICH";

}

function restoreRussian() {
    document.getElementById("surname").innerText = "ЗУБЦОВ";
    document.getElementById("firstname").innerText = "МИХАИЛ";
    document.getElementById("otchestvo").innerText = "АНДРЕЕВИЧ";
}

document.getElementById("change").addEventListener("click", changeToLatin);
document.getElementById("restore").addEventListener("click", restoreRussian);
