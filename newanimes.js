const punkteliste=document.getElementsByClassName("punkt");
punkteliste[0].classList.add("aktiv");

const slides=document.getElementsByClassName("slide");
slides[0].classList.add("aktiv");

var aktuellerIndex=0;

function umschalten(anzahl){
    var neuerIndex=aktuellerIndex+anzahl;
    if(neuerIndex<0){
        neuerIndex=2;
    }else if(neuerIndex>2){
        neuerIndex=0;
    }

    springen(neuerIndex);
}

function springen(neuerIndex){
    punkteliste[aktuellerIndex].classList.remove("aktiv");
    slides[aktuellerIndex].classList.remove("aktiv");
    punkteliste[neuerIndex].classList.add("aktiv");
    slides[neuerIndex].classList.add("aktiv");

    aktuellerIndex=neuerIndex;
}
