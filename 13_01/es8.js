/*
Costruire una funzione che dato un array numerico restituisce un array ordinato
*/

function sort(a){
  return a.sort(function (a, b) {  return a - b;  });
}

console.log(sort([9, 4, 5, 35, 9, 53, 3, 46, 1]));