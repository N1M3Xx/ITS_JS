/*
Costruire una funzione che ricevuto in input una mail restituisca true se la mail è valida oppure
false
*/

function valida(s) {
  var registro = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (s.match(registro)) {
    return true;
  } 
  else {
    return false;
  }
}
console.log(valida("gonzalo.perezbrisco@studenti.univr.it"));