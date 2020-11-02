/**************************************************************************************************/
/*****************************************************Wartości**************************************/
let yourValue = prompt("Wpisz wybraną liczbe", 0);
let InkLevel = {
    "cyan": 141,
    "magneta": 142,
    "yellow": 75
}

/**************************************************************************************************/
/*****************************************************Funkcje**************************************/

//sprawdzenie typu
function checkType(yourNr){return((typeof yourNr==='number') ? yourNr : parseFloat(yourNr));}

//zadanie 1
/*Pobierz liczbę z użyciem metody prompt (lub wpisz ją jako stałą, jeżeli użycie
metody prompt sprawia Ci trudność) i sprawdź, czy jest ona parzysta*/
function checkEven(nrValue){(nrValue%2==0) ? (console.log("Liczba parzysta")) : (console.log("Liczba nieparzysta"));}

//zadanie 2
/*Pobierz liczbę z użyciem metody prompt (lub wpisz ją jako stałą, jeżeli użycie
metody prompt sprawia Ci trudność) i sprawdź, czy mieści się w przedziale <-
35;2) lub (11;27>*/
function checkInRange(rangeVal){
    if (rangeVal>=-35&&rangeVal<2){console.log("Liczba w przedziale <-35,2)");}
    else if (rangeVal>11&&rangeVal<=27){console.log("Liczba w przedziale (11,27>");}
    else {console.log("Liczba poza wybranymi przedziałami")};
}

//zadanie 3
/*Pobierz liczbę z użyciem metody prompt (lub wpisz ją jako stałą, jeżeli użycie
metody prompt sprawia Ci trudność) i za pomocą instrukcji warunkowej switch wyświetl w
konsoli komunikat:
• „1” - zdałeś egzamin,
• „2” - „zaliczona tylko teoria”,
• „3” - „zaliczona tylko praktyka”,
• „0” - „egzamin do poprawy”.
Upewnijcie się, czy pobrana wartość jest na pewno liczbą (z użyciem metody typeof). Jeżeli nie
jest, proszę przekonwertować ją na liczbę (przypomnijcie sobie, co mówiłem na
temat: parseInt oraz parseFloat).*/
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
/*Napisz funkcję, która zwraca słowo something połączony ze spacją „ ”*/
function addSth(addSomething){return "something "+addSomething;}
//zadanie 5
/*Stwórz funkcję obliczającą liczbę wygranych, remisów i przegranych oraz obliczającą liczbę
punktów, które drużyna piłkarska uzyskała do tej pory.
• wygrane otrzymują 3 punkty
• remisy otrzymują 1 punkt
• porazki dają 0 punktów*/
function countPoints(wins,draws,losses){return wins*3+draws*1+losses*0;}

//zadanie 6
/*Farmer prosi cię, abyś powiedział mu, ile nóg można policzyć wśród wszystkich jego zwierząt.
Rolnik hoduje trzy gatunki:
• kurczaki = 2 nogi
• krowa = 4 nogi
• świnie = 4 nogi
Rolnik policzył swoje zwierzęta i podaje sumę częściową dla każdego gatunku. Musisz
zaimplementować funkcję, która zwraca całkowitą liczbę nóg wszystkich zwierząt.*/
function countLegs(chickens,cows,pigs){return chickens*2+cows*4+pigs*4;}

//zadanie 7
/*Utwórz funkcję, która przyjmuje liczbę całkowitą i zwraca silnię tej liczby całkowitej. Oznacza to,
że liczba całkowita pomnożona przez wszystkie dodatnie niższe liczby całkowite.*/
function factorial(num){
    let factorialResult=1;
    if(Number.isInteger(num)&&num>=0){
        if(num==0||num==1){return factorialResult;}
        else{
            for(num;num>1;num--){factorialResult=num*factorialResult;}
            return factorialResult;}}
    else{return "Wprowadz liczbę całkowitą dodatnią"};}

//zadanie 8
/*Napisz funkcję, która przyjmuje obiekt jako parametr, ile stron może wydrukować każdy kolor
atramentu. Podaj maksymalną liczbę stron, które drukarka może wydrukować, zanim skończy się
którykolwiek z kolorów.
*/
function inkLevels(inkCheck){
    let lowestLvl=99999;
    Object.keys(inkCheck).some(function(key) {
        if(inkCheck[key]<lowestLvl){lowestLvl=inkCheck[key]}
    })
    return lowestLvl;
}

//zadanie 9
/*Mając podaną wartość pH, zwróć, czy jest to wartość zasadowa (większa niż 7), „kwaśna”
(mniejsza niż 7) czy obojętna (7). Zwróć nieprawidłowy, jeśli podana wartość jest mniejsza niż 0
lub większa niż 14. Proszę wykorzystać instrukcję switch.*/
function pHCheck(pH){
    switch (true){
        case (pH < 7):
            return "kwaśna";
        case (pH > 7):
            return "zasadowa";
        case (pH==7):
            return "obojętna";
        default:
            return "Wprowadź poprawną wartość";}
}

/**************************************************************************************************/
/*****************************************************Wywołanie**************************************/
yourValue=checkType(yourValue);
checkEven(yourValue);
checkInRange(yourValue);
checkMark(yourValue);
console.log(addSth("Napis testowy"));
console.log(countPoints(3,2,2));
console.log(countLegs(5,3,1));
console.log(factorial(5))
console.log(inkLevels(InkLevel))
console.log(pHCheck(4))