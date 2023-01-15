/*
Partendo da un array di numeri scrivere una funzione che restituisca il valore minimo e massimo
presente all’interno dell’array
*/

function min_max(a){
  var min = Math.min(...a);
  var max = Math.max(...a);
  return "min :"+min+", max : "+max;
}

console.log(min_max([9, 4, 5, 2, 9, 6, 3, 2, 1]));
