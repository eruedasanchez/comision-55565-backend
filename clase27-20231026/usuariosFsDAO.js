import fs from 'fs'

console.log("Persistencia en Archivos iniciada")
let archivo="./src/DAO/usuarios.json"

function filtrar(arreglo, filtro){
    let keysFiltro=Object.keys(filtro)
    keysFiltro.forEach(prop=>{
        arreglo=arreglo.filter(elem=>elem[prop]==filtro[prop]) 
    })
    return arreglo
}

export class usuariosFsDAO{
    constructor(){

    }

    get(filtro={}){
        let usuarios=[]
        if(fs.existsSync(archivo)){
            usuarios=JSON.parse(fs.readFileSync(archivo, "utf-8"))
        }

        console.log(filtro)
        return filtrar(usuarios, filtro)
    }

    create(usuario){
        let usuarios=this.get()
        let _id=1
        if(usuarios.length>0){
            _id=usuarios[usuarios.length-1]._id + 1
        }

        let usuarioNuevo={_id, ...usuario}

        usuarios.push(usuarioNuevo)

        fs.writeFileSync(archivo, JSON.stringify(usuarios,null,5))

        return usuarioNuevo
    }
}