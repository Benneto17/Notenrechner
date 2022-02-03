let n1,n2,n3,n4,n5
let anzahlNote = 0;
let summe = 0;
let ergebnis;

function tfAuslesen () {
    n1 = parseInt(document.getElementById("tfNote1").value); //Auslesen Notenfelder 1 und Umwandlung in Zahl
    n2 = parseInt(document.getElementById("tfNote2").value); //Auslesen Notenfelder 2 und Umwandlung in Zahl
    n3 = parseInt(document.getElementById("tfNote3").value); //Auslesen Notenfelder 3 und Umwandlung in Zahl
    n4 = parseInt(document.getElementById("tfNote4").value); //Auslesen Notenfelder 4 und Umwandlung in Zahl
    n5 = parseInt(document.getElementById("tfNote5").value); //Auslesen Notenfelder 5 und Umwandlung in Zahl

    console.log(n1 + ";" + n2 + ";" + n3 + ";" + n4 + ";" + n5); //Ausgabe der Nummern in der Konsole hintereinander

    punktePruefen(n1)
    punktePruefen(n2)
    punktePruefen(n3)
    punktePruefen(n4)
    punktePruefen(n5)

    ergebnis = summe / anzahlNote; //Ergebnis zusammenrechnung, aus Summe und Anzahl der Noten

    document.getElementById("ausgabe").innerHTML = ergebnis; //Element "ausgabe" wird durch die Zahl Ergebnis ersetzt


    if (ergebnis <= 5)
    {
        document.getElementById("ausgabe").style.color = "crimson" //wenn Ergebnis kleiner 5 wird es rot gefärbt
    }

    if (ergebnis < 11 && ergebnis > 5)
    {
        document.getElementById("ausgabe").style.color = "goldenrod" //wenn Ergebnis kleiner 11 und größer 5 wird es gelb gefärbt
    }

    if (ergebnis >= 11)
    {
        document.getElementById("ausgabe").style.color = "green" //wenn Ergbnis größer 11 wird es grün gefärbt
    }

}


function punktePruefen(punkte) {
    if(isNaN(punkte))                             //Überprüfung ob es eine Zahl oder nicht ist
    {
        console.log(punkte + "ist keine Zahl!")   //Ausgabe, dass Punkte keine Zahl

    }else if(punkte > 15 || punkte < 0)           //wenn Punkte größer 15 und kleiner 0
    {
        console.log(punkte + "nicht zulässig")    //w
    }else{
    summe = summe + punkte;
    anzahlNote = anzahlNote + 1;
    }


}
