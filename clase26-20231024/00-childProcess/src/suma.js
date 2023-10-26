import path from 'path';

process.on("message", mensaje => {

    console.time("marca1");
    let resultado = 0;
        
    for(let i=0; i <= 50_000; i++){
        resultado++;
        console.log(resultado);
    }
    console.timeEnd("marca1");

    let script = path.basename(process.argv[1]); // path.basename(process.argv[1]) retorna el final de la ruta del script, es decir, el nombre del script
    console.log(`Soy el script ${script}, con id ${process.pid}, y recibí el siguiente mensaje: "${mensaje}"`);

    process.send(resultado); // cuando termina de ejecutar, envia el resultado
})


