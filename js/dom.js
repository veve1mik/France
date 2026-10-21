function readPassport() {
    let surname = document.getElementById("surname").innerText;
    let firstname = document.getElementById("firstname").innerText;
    let otchestvo = document.getElementById("otchestvo").innerText
    let year = document.getElementById("birthyear").innerText;

    document.getElementById("dom-result").innerText = surname + " " + firstname + " " + otchestvo + ", " + year;
    console.log(surname, firstname, otchestvo, year);
}

document.getElementById("read").addEventListener("click", readPassport);
