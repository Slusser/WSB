//pobranie wartosci
let yourValue = prompt("Wpisz wybraną liczbe", 0);

//funkcje

//sprawdzenie typu
function checkType(yourNr){return((typeof yourNr==='number') ? yourNr : parseFloat(yourNr));}
//zadanie 1
function checkEven(nrValue){(nrValue%2==0) ? (console.log("Liczba parzysta")) : (console.log("Liczba nieparzysta"));}
//zadanie 2
function checkInRange(rangeVal){
    if (rangeVal>=-35&&rangeVal<2){console.log("Liczba w przedziale <-35,2)");}
    else if (rangeVal>11&&rangeVal<=27){console.log("Liczba w przedziale (11,27>");}
    else {console.log("Liczba poza wybranymi przedziałami")};
}
//zadanie 3
function checkMark(mark){
    switch (mark){
        case 0:
            console.log("Egazmin do poprawy")
            break;
        case 1:
            console.log("Zdałeś egzamin")
            break;
        case 2:
            console.log("Zaliczona tylko teoria")
            break;
         case 3:
            console.log("Zaliczona tylko praktyka")
            break;
        default:
            console.log("Wybierz liczbę z przedziału <0,3>")
            break;};
}
//zadanie 4
function addSth(addSomething){return "something "+addSomething;}
//zadanie 5
function countPoints(wins,draws,losses){return wins*3+draws*1+losses*0;}
//zadanie 6
function countLegs(chickens,cows,pigs){return chickens*2+cows*4+pigs*4;}


//wywolanie
yourValue=checkType(yourValue);
checkEven(yourValue);
checkInRange(yourValue);
checkMark(yourValue);
console.log(addSth("Napis testowy"));
console.log(countPoints(3,2,2));
console.log(countLegs(5,3,1));
