// Supongamos que ejecutamos node 02-argsConProcess.js --port 8080 --user Diego

console.log("Argumentos pasados x CLI antes de cortarlos:", process.argv);
// [ '/usr/local/bin/node', '/Users/ezequielpc/Desktop/comision-55565-backend/clase25-20231019/src/02-argsConProcess.js', '--port', '8080', '--user', 'Diego']

let argumentos = process.argv.slice(2);

console.log("Argumentos pasados x CLI luego de cortar el arreglo:", argumentos); // [ '--port', '8080', '--user', 'Diego' ]

argumentos = argumentos.map(arg => arg.toUpperCase()); // se pasan los argumentos a mayusculas
console.log(argumentos); // [ '--PORT', '8080', '--USER', 'DIEGO' ]

if(argumentos.includes("--PORT")){
    let indice = argumentos.indexOf("--PORT");
    console.log(`El app correrá en el puerto ${argumentos[indice + 1]}`);  
}else{
    console.log("Ingrese el --port")
}