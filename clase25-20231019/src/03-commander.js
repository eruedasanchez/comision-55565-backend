import {Command, Option} from 'commander';

let program = new Command();

program
    .option("-p, --port <port>", "Puerto donde correrá el app", 3000)
    .option("-d, --debug", "Si esta presente el flag, activa el modo debug")
    .option("-l, --listadoValores [numeros...]", "Listado de valores a procesar", [])
    .requiredOption("-u, --user <usuario>", "Usuario que correrá el script")
    .addOption(new Option("-m, --mode <modo>", "Modo en que corre el app").choices(["development","production","testing"]).default("development"))
    .parse()


const opciones = program.opts();
console.log("program.opts()", opciones);

console.log(`Puerto: ${opciones.port}`, typeof opciones.port, typeof opciones.debug);

console.log("args", program.args); // program.args atrapa todos los parametros que queden sueltos

// Si pasamos por consola node ./src/03-commander.js -d obtenemos:
// { port: 3000, debug: true }

// Si pasamos por consola node ./src/03-commander.js -d -l 2 3 Diego false obtenemos:
// {
//     port: 3000,
//     listadoValores: [ '2', '3', 'Diego', 'false' ],
//     debug: true
//   }

// El comando -l almacena todos los valores que se pasan luego -l en un arreglo llamado listadoValores

// Si pasamos por consola node ./src/03-commander.js -d -l 2 3 Diego false (con requiredOption habilitado) obtenemos:
// error: required option '-u, --user <usuario>' not specified
// porque es requerido 

// Si pasamos por consola node ./src/03-commander.js -d -l 2 3 Diego false -u root (con requiredOption habilitado) obtenemos:

// {
//     port: 3000,
//     listadoValores: [ '2', '3', 'Diego', 'false' ],
//     debug: true,
//     user: 'root'
// }

// Si pasamos por consola node ./src/03-commander.js -d -l 2 3 Diego false -u root (con addOption habilitado) obtenemos:

// {
//     port: 3000,
//     listadoValores: [ '2', '3', 'Diego', 'false' ],
//     mode: 'development', porque por defecto el modo es development
//     debug: true,
//     user: 'root'
// }

// Si pasamos por consola node ./src/03-commander.js -d -l 2 3 Diego false -u root -m pruebas (con addOption habilitado) obtenemos:

// error: option '-m, --mode <modo>' argument 'pruebas' is invalid. Allowed choices are development, production, testing.
// porque no esta definido el modo pruebas

// Si pasamos por consola node ./src/03-commander.js -d -l 2 3 Diego false -u root -m testing (con addOption habilitado) obtenemos:

// {
//     port: 3000,
//     listadoValores: [ '2', '3', 'Diego', 'false' ],
//     mode: 'testing',
//     debug: true,
//     user: 'root'
// }

// Si ejecutamos node ./src/03-commander.js --help, obtenemos: 
// Options:
//   -p, --port <port>  Puerto donde correrá el app (default: 3000)
//   -d, --debug        Si esta presente el flag, activa el modo debug
//   -h, --help         display help for command