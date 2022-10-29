// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
  /*   const num = [1,2,3,4,5,6,7,8,9,10];
    let sum = 0;

     for(let i= 1; i < num.length; i++){
     sum += num[i];

    }
    return sum; */
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  arrayPar=[];

  for (let i= 0; i < (array.length +1) ; i++){
    if((array[i]%2 ) ==0){
      arrayPar.push(array[i])
  }
  }return arrayPar
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  array2=[]
  for(let i= 0; i < array.length; i++){
    array2.push(array[i]**2)
  }return array2;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var total = 0;

  for (let i = 0; i < array.length; i ++) {
    total += array[i];
  }
  return total;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  let numDigitos =String(num);
  return numDigitos.length
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
