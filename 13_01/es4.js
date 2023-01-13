function rimuovi(a, x){
  var i = a.indexOf(x);
  if (i > -1)
    a.splice(i, 1);
  return a;
}

console.log(rimuovi([2, 4, 5, 7], 4));

