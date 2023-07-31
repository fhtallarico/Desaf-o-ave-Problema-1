const multiplicador = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number")
    // Valido que ambos parametros sean valores numericos.
    return "ERROR: Por favor valide que ambos parametros sean numericos";

  const multiplicando = Math.abs(x); // Convierto los parametros a su valor absoluto para poder utilizarlos en una iteracion
  const multiplicador = Math.abs(y);

  const resultado = Array.from(
    { length: multiplicador },
    () => multiplicando
  ).reduce((acc, val) => acc + val, 0); // Convierto a array para poder iterar la cantidad de veces que sea necesario por el valor Y y sumo los valores X

  return Math.sign(x) === Math.sign(y) ? resultado : -resultado; // Valido que el signo de los parametros sea el mismo para saber si el resultado es positivo o negativo
};

//Ejemplos
console.log("Ejemplo 1: ", multiplicador("a", 1)); // Genera error
console.log("Ejemplo 2: ", multiplicador(2, 3)); // Retorna 6
console.log("Ejemplo 3: ", multiplicador(2, -1)); // Retorna -2
console.log("Ejemplo 4: ", multiplicador(-2, -8)); // Retorna 16

// Resultado
console.log("Resultado: ", multiplicador(1, 1)); // Modifique aqui los parametros de la funcion para recibir el resutlado deseado
