/*
Dati due array di valori creare una funzione che restituisca un array con solo i valori presenti in
tutti e due gli array di input
*/

function min_max(a, a2){
  for(var i=0; i<a.length; i++){
    for(var j=0; j<a2.length; j++){
      if(a[i]==a2[j]){
        console.log(a[i]);
        break;
      }
    }
  }
}

min_max([9, 4, 5, 2], [9, 4, 6, 9]);