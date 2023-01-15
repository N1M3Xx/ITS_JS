/*
Costruire una funzione che dato un array e un valore booleano in input stampi in console i valori
uno dopo l’altro o in modo inverso
*/

function stampa(a, b){
  if(b==true)
    return a;
  else
    return a.reverse();
}

console.log(stampa([9, 4, 5, 2, 9, 6, 3, 2, 1], false));