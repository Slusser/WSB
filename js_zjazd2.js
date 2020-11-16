//********* Deklaracja zmiennych ************/

const arrTaskOne = [2,3,5,7];
const arrTaskTwo = ["Adam", "Kasia", "Tomek", "Basia"];
const arrTaskThree = [123, 1, 13];

//**************** Funckje *******************/

//Zadanie 1
//Utwórz funkcję, która pobiera tablicę liczb i zwraca sumę jej sześcianów.
const sumOfCubes = obj => {let cube=0; for(let item of obj){cube+=Math.pow(item,3)}; return cube} 

//Zadanie 2
//Grupa przyjaciół postanowiła założyć tajne stowarzyszenie. Nazwa będzie pierwszą literą każdego z ich imion, posortowaną w porządku alfabetycznym.
//Utwórz funkcję, która pobiera tablicę nazw i zwraca nazwę tajnego stowarzyszenia.
const firstLetters = acronym => {let firstLetter=[]; for(item in acronym){firstLetter.push(acronym[item][0])}; return firstLetter.sort().join('')}

//Zadanie 3
//Utwórz funkcję, która przyjmuje tablicę liczb i zwraca zarówno minimalną, jak i maksymalną liczbę w tej kolejności.
const findMinMax = minMax => {let newArr=[]; newArr.push(Math.min.apply(null,minMax)); newArr.push(Math.max.apply(null,minMax)); return newArr}  

//**************** Wywołanie *****************/
console.log(sumOfCubes(arrTaskOne))
console.log(firstLetters(arrTaskTwo))
console.log(findMinMax(arrTaskThree))
