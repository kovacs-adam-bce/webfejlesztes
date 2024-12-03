function elso() {
    if (document.getElementById("jo1").checked) {
        document.getElementById("kerdes2").style.display = "inline";
        document.getElementById("jovalasz").style.color = "green";
        document.getElementById("jovalasz").style.fontWeight = "bold";
    }
    else {
        alert("Helytelen válasz, kérlek próbáld újra!");
    }
}

function masodik() {
    if (document.getElementById("jo2").checked) {
        document.getElementById("kerdes3").style.display = "inline";
        document.getElementById("jovalasz1").style.color = "green";
        document.getElementById("jovalasz1").style.fontWeight = "bold";
    }
    else {
        alert("Helytelen válasz, kérlek próbáld újra!");
    }
}

function harmadik() {
    if (document.getElementById("jo3").checked) {
        document.getElementById("kerdes4").style.display = "inline";
        document.getElementById("jovalasz2").style.color = "green";
        document.getElementById("jovalasz2").style.fontWeight = "bold";
    }
    else {
        alert("Helytelen válasz, kérlek próbáld újra!");
    }
}

function negyedik() {
    if (document.getElementById("jo4").checked) {
        document.getElementById("kerdes5").style.display = "inline";
        document.getElementById("jovalasz3").style.color = "green";
        document.getElementById("jovalasz3").style.fontWeight = "bold";
    }
    else {
        alert("Helytelen válasz, kérlek próbáld újra!");
    }
}

function otodik() {
    if (document.getElementById("jo5").checked) {
        document.getElementById("kerdes6").style.display = "inline";
        document.getElementById("jovalasz4").style.color = "green";
        document.getElementById("jovalasz4").style.fontWeight = "bold";
    }
    else {
        alert("Helytelen válasz, kérlek próbáld újra!");
    }
}

function hatodik() {
    if (document.getElementById("jo6").checked) {
        document.getElementById("kerdes7").style.display = "inline";
        document.getElementById("jovalasz5").style.color = "green";
        document.getElementById("jovalasz5").style.fontWeight = "bold";
    }
    else {
        alert("Helytelen válasz, kérlek próbáld újra!");
    }
}

function hetedik() {
    if (document.getElementById("jo7").checked) {
        document.getElementById("kerdes8").style.display = "inline";
        document.getElementById("jovalasz6").style.color = "green";
        document.getElementById("jovalasz6").style.fontWeight = "bold";
    }
    else {
        alert("Helytelen válasz, kérlek próbáld újra!");
    }
}

function nyolcadik() {
    if (document.getElementById("jo8").checked) {
        document.getElementById("kerdes9").style.display = "inline";
        document.getElementById("jovalasz7").style.color = "green";
        document.getElementById("jovalasz7").style.fontWeight = "bold";
    }
    else {
        alert("Helytelen válasz, kérlek próbáld újra!");
    }
}

function kilencedik() {
    if (document.getElementById("jo9").checked) {
        document.getElementById("kerdes10").style.display = "inline";
        document.getElementById("jovalasz8").style.color = "green";
        document.getElementById("jovalasz8").style.fontWeight = "bold";
    }
    else {
        alert("Helytelen válasz, kérlek próbáld újra!");
    }
}

function tizedik() {
    if (document.getElementById("jo10").checked) {
        document.getElementById("kerdes11").style.display = "inline";
        document.getElementById("jovalasz9").style.color = "green";
        document.getElementById("jovalasz9").style.fontWeight = "bold";
    }
    else {
        alert("Helytelen válasz, kérlek próbáld újra!");
    }
}
function tizenegyedik() {
    if (document.getElementById("jo11").checked) {
        document.getElementById("kerdes12").style.display = "inline";
        document.getElementById("jovalasz10").style.color = "green";
        document.getElementById("jovalasz10").style.fontWeight = "bold";
    }
    else {
        alert("Helytelen válasz, kérlek próbáld újra!");
    }
}

function tizenkettedik() {
    if (document.getElementById("jo12").checked) {
        document.getElementById("kerdes13").style.display = "inline";
        document.getElementById("jovalasz11").style.color = "green";
        document.getElementById("jovalasz11").style.fontWeight = "bold";
    }
    else {
        alert("Helytelen válasz, kérlek próbáld újra!");
    }
}

function tizenharmadik() {
    if (document.getElementById("jo13").checked) {
        document.getElementById("kerdes14").style.display = "inline";
        document.getElementById("jovalasz12").style.color = "green";
        document.getElementById("jovalasz12").style.fontWeight = "bold";
    }
    else {
        alert("Helytelen válasz, kérlek próbáld újra!");
    }
}

function tizennegyedik() {
    if (document.getElementById("jo14").checked) {
        document.getElementById("jovalasz13").style.color = "green";
        document.getElementById("jovalasz13").style.fontWeight = "bold";
        alert("Gratulálok a teszt végére értél!")
    }
    else {
        alert("Helytelen válasz, kérlek próbáld újra!");
    }
}

document.getElementById("gomb1").addEventListener("click", elso)
document.getElementById("gomb2").addEventListener("click", masodik)
document.getElementById("gomb3").addEventListener("click", harmadik)
document.getElementById("gomb4").addEventListener("click", negyedik)
document.getElementById("gomb5").addEventListener("click", otodik)
document.getElementById("gomb6").addEventListener("click", hatodik)
document.getElementById("gomb7").addEventListener("click", hetedik)
document.getElementById("gomb8").addEventListener("click", nyolcadik)
document.getElementById("gomb9").addEventListener("click", kilencedik)
document.getElementById("gomb10").addEventListener("click", tizedik)
document.getElementById("gomb11").addEventListener("click", tizenegyedik)
document.getElementById("gomb12").addEventListener("click", tizenkettedik)
document.getElementById("gomb13").addEventListener("click", tizenharmadik)
document.getElementById("gomb14").addEventListener("click", tizennegyedik)