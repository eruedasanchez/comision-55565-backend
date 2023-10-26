// process.on escucha el evento cuando el problema termina y ejecuta la leyenda "Programa ha terminado..."
process.on("exit", codigo => {
    console.log("Programa ha terminado...", codigo)
    
    if(codigo === -10) console.log("Salida forzada... codigo -10")
})

// Output 
// inicio programa
// 1
// 2
// 3
// 4
// error cualquiera...
// pero sigue...
// 5
// console is not a function
// pero sigue...
// 6
// Programa ha terminado... -10
// Salida forzada... codigo -10

// codigo === 0 salida exitosa del programa
// codigo === 1 salida con errores del programa
// los codigos del 0 al 10 estan reservados. Por eso, elijo el codigo -10


process.on("uncaughtException", error =>{
    if(error){
        console.log(error.message)
    }
    console.log("pero sigue...")
})

setTimeout(() => {
    console("Prueba")
}, 6000)

// Agregando estaa dos funciones, tenemos un error en console pero gracias al process.on("uncaughtException")
// no se corta la ejecucion del programa sino que a los 6 segundos que se tendria que ejecutar console("Prueba")
// arroja:

// console is not a function
// pero sigue...

// gracias a que escucha el evento process.on("uncaughtException") 


// inicio programa
// 1
// 2
// 3
// 4
// 5
// console is not a function
// pero sigue...
// 6
// 7
// 8
// 9
// 10
// fin programa
// Programa ha terminado... 0


setTimeout( () => {
    process.exit(-10) // a los 7 segundoss, process.exit termina la ejecucion del programa 
},7000)

setTimeout(() => {
    throw new Error("error cualquiera..."); // el evento uncaugth tambien atrapa este error
},5000)

console.log("inicio programa");

// El programa aumenta en 1 la variable contador cada 1 segundo
let contador = 1;
let int01 = setInterval(() => {
    console.log(contador);
    contador++;
    if(contador > 10){
        clearInterval(int01);
        console.log("fin programa");
    }
}, 1000);

