/*
Scrivere una funziona che dato un numero restituisca il suo inverso
Esempio x = 12345;
Output : 54321;
*/

function min_max(n){
  n = n.toString();
  n = n.split("");
  n = n.reverse();
  n = n.join("");
  return n;
}

console.log(min_max(436578268470));
