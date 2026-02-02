

const textfeld = document.getElementById("txtf");
const button = document.getElementById("btn");
const out = document.getElementById("out");

const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const s3 = document.getElementById("s3");

var eingabe = 0;
var rannum = Math.floor(Math.random() * 900) + 100;

neuezahl();
function neuezahl() {
    var zahl = String(rannum);

    var hunderter = zahl[0];
    var zehner   = zahl[1];
    var einer    = zahl[2];

    s1.textContent = ("Einerstelle = " + einer);
    s2.textContent = ("Zehnerstelle = " + zehner);
    s3.textContent = ("Hunderterstelle = " + hunderter);
};

button.addEventListener("click", () => {
    const eingabe = Number(textfeld.value);
    if (eingabe == rannum) {
        out.value = ('Richtig!! Deine eingabe: ' + eingabe + " = " + rannum + "  Zufalsnummer.");
        rannum = Math.floor(Math.random() * 900) + 100;
        neuezahl()
    }
    else {
        out.value = ("Falsch geraten!")
    }

});