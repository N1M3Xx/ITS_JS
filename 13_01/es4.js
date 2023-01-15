function rimuovi(a, i){
  var i = a.indexOf(i);
  if (i > -1)
    a.splice(i, 1);
  return a;
}

console.log(rimuovi([2, 4, 5, 7], 4));

